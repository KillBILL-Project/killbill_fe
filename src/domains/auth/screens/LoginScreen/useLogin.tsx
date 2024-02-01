import { useCallback, useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { AxiosError } from 'axios';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LoginFormType, LoginResponse, LoginType } from '../../../../types/common';
import useToast from '../../../../hooks/useToast';
import { windowHeight } from '../../../../utils/platform';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import { requestLogin } from '../../../../services/api/authService';
import { AuthStackParamList } from '../../../../types/navigation';
import useAuth from '../../../../hooks/useAuth';

const useLogin = () => {
  const { t } = useTranslation();
  const [inLoginProgress, setInLoginProgress] = useState(false);
  const { showToast } = useToast();
  const { top, bottom } = useSafeAreaInsets();
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const { setTokens } = useAuth();

  const [loginForm, setLoginForm] = useState<LoginFormType>({
    email: '',
    password: '',
    loginType: undefined,
    authCode: null,
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

  const login = async (loginType: LoginType) => {
    if (inLoginProgress) return;
    try {
      setInLoginProgress(true);
      loginForm.loginType = loginType;

      if (loginType === 'EMAIL' && !isValidForm()) return;

      if (loginType === 'GOOGLE') {
        try {
          GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
          });
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();

          loginForm.loginType = 'GOOGLE';
          loginForm.authCode = userInfo.serverAuthCode;
          loginForm.email = userInfo.user.email;
        } catch (error) {
          console.log('구글 로그인 도중 문제가 발생하였습니다.');
        }
      }

      if (loginType === 'APPLE') {
      }

      try {
        const response = await requestLogin<LoginResponse>(loginForm);

        await setTokens({ ...response?.data.data });
      } catch (e: unknown) {
        if (e instanceof AxiosError && e.response?.status === 404) {
          if (loginType === 'EMAIL') {
            showToast({ isFailed: true, message: e.response?.data.message });
          } else {
            navigate('AuthDetail', { email: loginForm.email, loginType });
          }
        }
      }
    } finally {
      setInLoginProgress(false);
    }
  };

  return { login, safeAreaHeight, loginForm, onChangeForm };
};

export default useLogin;
