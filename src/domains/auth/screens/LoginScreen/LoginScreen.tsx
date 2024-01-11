import React, { useCallback, useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, GREY500, WHITE } from '../../../../constants/colors';
import {
  Container,
  Greeting,
  LoginContainer,
  SsoLoginButtonContainer,
  AdditionalButtonContainer,
  Separator,
  KeyboardHideArea,
} from './Login.style';
import BaseInput from '../../components/BaseInput/BaseInput';
import Spacer from '../../../../components/Spacer/Spacer';
import BaseButton from '../../components/BaseButton/BaseButton';
import { RootStackParamList } from '../../../../types/navigation';

import GoogleLoginIcon from '../../../../assets/icon/login_icon_google.png';
import AppleLoginIcon from '../../../../assets/icon/login_icon_apple.png';
import { LoginFormType } from '../../../../types/common';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import AdditionalButton from './components/AdditionalButton';
import useAuth from '../../../../hooks/useAuth';
import { H1 } from '../../../../components/Typography/Typography';
import useToast from '../../../../hooks/useToast';
import { windowHeight } from '../../../../utils/platform';

const LoginScreen = () => {
  const { login } = useAuth();
  const [loginForm, setLoginForm] = useState<LoginFormType>({
    email: '',
    password: '',
    loginType: undefined,
    authCode: null,
  });
  const [inLoginProgress, setInLoginProgress] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();
  const { top, bottom } = useSafeAreaInsets();

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
        showToast({ message: element.message, isFailed: true });
        return false;
      }
    }
    return true;
  }, [showToast, validationList]);

  const onPressEmailLoginButton = async () => {
    if (inLoginProgress) return;
    if (!isValidForm()) return;

    loginForm.loginType = 'EMAIL';
    await login(loginForm);
  };

  const onPressAppleLoginButton = async () => {
    if (inLoginProgress) return;
    loginForm.loginType = 'APPLE';

    try {
      setInLoginProgress(true);
    } finally {
      setInLoginProgress(false);
    }
  };

  const onPressGoogleLoginButton = async () => {
    if (inLoginProgress) return;
    loginForm.loginType = 'GOOGLE';

    try {
      GoogleSignin.configure({
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo: ', userInfo);
      // 로그인 성공 처리
      loginForm.loginType = 'GOOGLE';
      loginForm.authCode = userInfo.serverAuthCode;
      loginForm.email = userInfo.user.email;

      await login(loginForm);
    } catch (error) {
      console.error(error);
      console.log('구글 로그인 도중 문제가 발생하였습니다.');
    }
  };

  const onPressRegisterButton = () => navigation.navigate('Register');
  const onPressForgotPasswordButton = () => navigation.navigate('ForgotPassword');

  return (
    <>
      {ToastComponent}
      <Screen isHeaderShown={false} backgroundColor={WHITE}>
        <KeyboardHideArea onPress={Keyboard.dismiss} accessible={false}>
          <Container height={safeAreaHeight}>
            <LoginContainer>
              <Greeting>
                <H1 color={BLACK}>{t('login.greeting.0')}</H1>
                <H1 color={BLACK}>{t('login.greeting.1')}</H1>
              </Greeting>
              <BaseInput
                title={t('login.input.email.title')}
                placeholder={t('login.input.email.placeholder')}
                onChangeText={text => onChangeForm('email', text)}
                value={loginForm.email}
              />
              <BaseInput
                title={t('login.input.password.title')}
                isSecure
                placeholder={t('login.input.password.placeholder')}
                onChangeText={text => onChangeForm('password', text)}
                value={loginForm.password}
              />
              <Spacer height={10} />
              <BaseButton
                onPress={onPressEmailLoginButton}
                text={t('login.button.login')}
                backgroundColor={GREY500}
                color={WHITE}
                marginBottom={16}
              />
              <AdditionalButtonContainer>
                <AdditionalButton
                  title={t('login.button.register')}
                  onPress={onPressRegisterButton}
                />
                <Separator>|</Separator>
                <AdditionalButton
                  title={t('login.button.find_password')}
                  onPress={onPressForgotPasswordButton}
                />
              </AdditionalButtonContainer>
            </LoginContainer>
            <SsoLoginButtonContainer>
              <BaseButton
                onPress={onPressAppleLoginButton}
                text={t('login.button.apple_login')}
                backgroundColor={BLACK}
                color={WHITE}
                icon={AppleLoginIcon}
                marginBottom={12}
              />
              <BaseButton
                onPress={onPressGoogleLoginButton}
                text={t('login.button.google_login')}
                backgroundColor={WHITE}
                color="#00000054"
                icon={GoogleLoginIcon}
              />
            </SsoLoginButtonContainer>
          </Container>
        </KeyboardHideArea>
      </Screen>
    </>
  );
};

export default LoginScreen;
