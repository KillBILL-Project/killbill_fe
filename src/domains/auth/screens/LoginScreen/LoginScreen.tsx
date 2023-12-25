import React, { useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, GOOGLE_LOGIN, GREY500, WHITE } from '../../../../constants/colors';
import {
  Container,
  Greeting,
  LoginContainer,
  SsoLoginButtonContainer,
  AdditionalButtonContainer,
  Separator,
} from './Login.style';
import BaseInput from '../../components/BaseInput/BaseInput';
import Spacer from '../../../../components/Spacer/Spacer';
import BaseButton from '../../components/BaseButton/BaseButton';
import { RootStackParamList } from '../../../../types/navigation';

import GoogleLoginIcon from '../../../../assets/icon/login_icon_google.png';
import AppleLoginIcon from '../../../../assets/icon/login_icon_apple.png';
import { LoginFormType, LoginType } from '../../../../types/common';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import AdditionalButton from './components/AdditionalButton';
import useAuth from '../../../../hooks/useAuth';
import { H1 } from '../../../../components/Typography/Typography';
import useToast from '../../../../hooks/useToast';

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

  const onChangeEmail = (text: string) => {
    setLoginForm(prevState => ({ ...prevState, email: text }));
  };
  const onChangePassword = (text: string) => {
    setLoginForm(prevState => ({ ...prevState, password: text }));
  };
  const setLoginType = (text: LoginType) => {
    setLoginForm(prevState => ({ ...prevState, loginType: text }));
  };

  const isValidForm = useMemo(() => {
    return (
      isValidEmail(loginForm.email) && isValidPassword(loginForm.password) && !!loginForm.loginType
    );
  }, [loginForm.email, loginForm.loginType, loginForm.password]);

  const onPressEmailLoginButton = async () => {
    if (inLoginProgress) return;
    setLoginType('EMAIL');
    if (!isValidForm) {
      await showToast({ message: '비밀번호를 확인해주세요.', isFailed: true });
      return;
    }

    await login(loginForm);
  };

  const onPressAppleLoginButton = async () => {
    if (inLoginProgress) return;
    setLoginType('APPLE');

    try {
      setInLoginProgress(true);
    } finally {
      setInLoginProgress(false);
    }
  };

  const onPressGoogleLoginButton = async () => {
    if (inLoginProgress) return;
    setLoginType('GOOGLE');

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
        <Container>
          <LoginContainer>
            <Greeting>
              <H1 color={BLACK}>어서오세요.</H1>
              <H1 color={BLACK}>반가워해드릴게요</H1>
            </Greeting>
            <BaseInput
              title="이메일"
              placeholder="이메일 주소 입력"
              onChangeText={onChangeEmail}
              value={loginForm.email}
            />
            <BaseInput
              title="비밀번호"
              isSecure
              placeholder="비밀번호 입력"
              onChangeText={onChangePassword}
              value={loginForm.password}
            />
            <Spacer height={10} />
            <BaseButton
              onPress={onPressEmailLoginButton}
              text="로그인"
              backgroundColor={GREY500}
              color={WHITE}
            />
            <AdditionalButtonContainer>
              <AdditionalButton title="이메일 회원가입" onPress={onPressRegisterButton} />
              <Separator>|</Separator>
              <AdditionalButton title="비밀번호 찾기" onPress={onPressForgotPasswordButton} />
            </AdditionalButtonContainer>
          </LoginContainer>
          <SsoLoginButtonContainer>
            <BaseButton
              onPress={onPressAppleLoginButton}
              text="Apple로 시작하기"
              backgroundColor={BLACK}
              color={WHITE}
              icon={AppleLoginIcon}
            />
            <BaseButton
              onPress={onPressGoogleLoginButton}
              text="Google로 시작하기"
              backgroundColor={WHITE}
              color={GOOGLE_LOGIN}
              icon={GoogleLoginIcon}
            />
          </SsoLoginButtonContainer>
        </Container>
      </Screen>
    </>
  );
};

export default LoginScreen;
