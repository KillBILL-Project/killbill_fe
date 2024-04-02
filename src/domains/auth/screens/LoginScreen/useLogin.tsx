import { useCallback, useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { AxiosError } from 'axios';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { LoginType } from '../../../../types/common';
import useToast from '../../../../hooks/useToast';
import { windowHeight } from '../../../../utils/platform';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import { requestLogin } from '../../../../services/api/authService';
import { AuthStackParamList } from '../../../../types/navigation';
import useAuth from '../../../../hooks/useAuth';
import { inProgressState } from '../../../../states';
import { LoginForm, LoginRequest, LoginResponse } from '../../../../types/auth';
import appleAuth from '@invertase/react-native-apple-authentication';
import { Alert } from 'react-native';

const useLogin = () => {
  const [inProgress, setInProgress] = useRecoilState(inProgressState);
  const { top, bottom } = useSafeAreaInsets();
  const { t } = useTranslation();
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

  const { showToast } = useToast();
  const { setTokens } = useAuth();

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const safeAreaHeight = windowHeight - top - bottom;

  const onChangeForm = (filed: string, value: string) => {
    setLoginForm(prevState => ({ ...prevState, [filed]: value }));
  };

  const validationList = useMemo(
    () => [
      {
        validation: isValidEmail(loginForm.email),
        message: t('login.validation.invalid_email'),
      },
      {
        validation: isValidPassword(loginForm.password),
        message: t('login.validation.invalid_password'),
      },
    ],
    [loginForm.email, loginForm.password, t],
  );

  const isValidForm = useCallback(() => {
    for (const element of validationList) {
      if (!element.validation) {
        showToast({ isFailed: true, message: element.message });
        return false;
      }
    }
    return true;
  }, [showToast, validationList]);

  const getErrorMessage = (error: any): string => {
    try {
      const appleError = appleAuth.Error;
      let errorMessage: string;

      switch (error.code) {
        case appleError.CANCELED:
          errorMessage = 'The user canceled the authorization attempt';
          break;
        case appleError.FAILED:
          errorMessage = 'The authorization attempt failed.';
          break;
        case appleError.INVALID_RESPONSE:
          errorMessage = 'The authorization request received an invalid response.';
          break;
        case appleError.UNKNOWN:
          errorMessage = 'The authorization attempt failed for an unknown reason.';
          break;
        case appleError.NOT_HANDLED:
          errorMessage = "The authorization request wasn't handled.";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      return errorMessage;
    } catch (e) {
      throw new Error(`onError : ${error.message}`);
    }
  };

  const appleLogin: () => Promise<null | LoginRequest> = async () => {
    try {
      const operation = appleAuth.Operation;
      const scope = appleAuth.Scope;
      const state = appleAuth.State;

      const responseObject = await appleAuth.performRequest({
        requestedOperation: operation.LOGIN,
        requestedScopes: [scope.EMAIL],
      });

      const credentialState = await appleAuth.getCredentialStateForUser(responseObject.user);

      if (credentialState === state.AUTHORIZED) {
        if (responseObject.identityToken == null) {
          Alert.alert('token 없음');
          return null;
        }

        const loginRequest: LoginRequest = {
          loginType: 'APPLE',
          authCode: responseObject.identityToken,
        };

        return loginRequest;
      }

      Alert.alert('Login 실패');
      return null;
    } catch (error: any) {
      const errorMessage = getErrorMessage(error);
      console.error('apple login : ', errorMessage);
      return null;
    }
  };

  const login = async (loginType: LoginType) => {
    if (inProgress) return;
    const loginRequest: LoginRequest = { loginType: 'EMAIL' };
    let isCanceled = false;

    try {
      setInProgress(true);

      if (loginType === 'EMAIL') {
        if (!isValidForm()) return;
        loginRequest.email = loginForm.email;
        loginRequest.password = loginForm.password;
      }

      if (loginType === 'GOOGLE') {
        try {
          GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
          });
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();

          loginRequest.loginType = 'GOOGLE';
          loginRequest.authCode = userInfo.idToken ?? '';
        } catch (error) {
          isCanceled = true;
          console.log('구글 로그인 도중 문제가 발생하였습니다.');
        }
      }

      if (loginType === 'APPLE') {
        const loginResult = await appleLogin();
        if (loginResult === null) return;

        loginRequest.authCode = loginResult.authCode;
        loginRequest.loginType = loginResult.loginType;
      }

      try {
        if (loginType !== 'EMAIL' && isCanceled) return;

        const response = await requestLogin<LoginResponse>(loginRequest);
        await setTokens({ ...response?.data.data });
      } catch (e: unknown) {
        if (e instanceof AxiosError && e.response?.status === 404) {
          if (loginType === 'EMAIL') {
            showToast({ isFailed: true, message: e.response?.data.message });
          } else {
            navigate('AuthDetail', {
              loginType: loginRequest.loginType,
              authCode: loginRequest.authCode!,
            });
          }
        }
      }
    } finally {
      setInProgress(false);
    }
  };

  return { login, safeAreaHeight, loginForm, onChangeForm };
};

export default useLogin;
