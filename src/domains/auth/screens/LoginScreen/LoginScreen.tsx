import React, { useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, GOOGLE_LOGIN, GREY_4, WHITE } from '../../../../constants/colors';
import {
  Container,
  Greeting,
  GreetingText,
  LoginContainer,
  SsoLoginButtonContainer,
  AdditionalButtonContainer,
  Separator,
} from './Login.style';
import BaseInput from '../../components/BaseInput/BaseInput';
import Margin from '../../../../components/Margin/Margin';
import BaseButton from '../../components/BaseButton/BaseButton';
import { RootStackParamList } from '../../../../types/navigation';

import GoogleLoginIcon from '../../../../assets/icon/login_icon_google.png';
import AppleLoginIcon from '../../../../assets/icon/login_icon_apple.png';
import { LoginFormType, LoginType } from '../../../../types/common';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import AdditionalButton from './components/AdditionalButton';
import useAuth from '../../../../hooks/useAuth';

const LoginScreen = () => {
  const { login } = useAuth();
  const [loginForm, setLoginForm] = useState<LoginFormType>({
    email: '',
    password: '',
    loginType: undefined,
    authCode: null,
  });
  const [inLoginProgress, setInLoginProgress] = useState(false);
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
      // TODO: 토스트
      Alert.alert('로그인 유효성 검사');
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
        webClientId: '1361813122-mn0eqsjcn0aar3cvr8on3grfo7agfi0h.apps.googleusercontent.com',
        iosClientId: '1361813122-5d0kpqd78q7bvsqbsi3lpqmp6laq747m.apps.googleusercontent.com',
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // 로그인 성공 처리
      loginForm.loginType = 'GOOGLE';
      loginForm.authCode = userInfo.serverAuthCode;
      loginForm.email = userInfo.user.email;

      await login(loginForm);
    } catch (error) {
      console.log('구글 로그인 도중 문제가 발생하였습니다.');
    }
  };

  const onPressRegisterButton = () => navigation.navigate('Register');
  const onPressForgotPasswordButton = () => navigation.navigate('ForgotPassword');

  return (
    <Screen isHeaderShown={false} backgroundColor={WHITE}>
      <Container>
        <LoginContainer>
          <Greeting>
            <GreetingText>어서오세요.</GreetingText>
            <GreetingText>반가워해드릴게요</GreetingText>
          </Greeting>
          <BaseInput
            title="로그인"
            placeholder="이메일 주소 입력"
            onChangeText={onChangeEmail}
            value={loginForm.email}
          />
          <BaseInput
            title="패스워드"
            isSecure
            placeholder="패스워드 입력"
            onChangeText={onChangePassword}
            value={loginForm.password}
          />
          <Margin height={10} />
          <BaseButton
            onPress={onPressEmailLoginButton}
            text="로그인"
            backgroundColor={GREY_4}
            color="white"
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
  );
};

export default LoginScreen;
