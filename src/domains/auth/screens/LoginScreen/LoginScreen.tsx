import React, { useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, GOOGLE_LOGIN, GREY_4, WHITE } from '../../../../constants/colors';
import {
  Container,
  Greeting,
  GreetingText,
  LoginContainer,
  SsoLoginButtonContainer,
  AdditionalButtonContainer,
  AdditionalTouchable,
  AdditionalButtonText,
  Separator,
} from './Login.style';
import BaseInput from '../../components/BaseInput/BaseInput';
import Margin from '../../../../components/Margin/Margin';
import BaseButton from '../../components/BaseButton/BaseButton';
import { RootStackParamList } from '../../../../types/navigation';

import GoogleLoginIcon from '../../../../assets/icon/login_icon_google.png';
import AppleLoginIcon from '../../../../assets/icon/login_icon_apple.png';
import { LoginType } from '../../../../types/common';
import { emailLogin } from '../../../../services/api/authService';
import { isValidEmail, isValidPassword } from '../../../../utils/common';

interface AdditionalButtonProps {
  onPress: () => void;
  title: string;
}

interface LoginFormType {
  email: string;
  password: string;
  loginType: LoginType | undefined;
}

const AdditionalButton = ({ onPress, title }: AdditionalButtonProps) => {
  return (
    <AdditionalTouchable>
      <AdditionalButtonText onPress={onPress}>{title}</AdditionalButtonText>
    </AdditionalTouchable>
  );
};

export default () => {
  const [loginForm, setLoginForm] = useState<LoginFormType>({
    email: '',
    password: '',
    loginType: undefined,
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
      isValidEmail(loginForm.email) &&
      isValidPassword(loginForm.password) &&
      loginForm.loginType !== undefined
    );
  }, [loginForm.email, loginForm.loginType, loginForm.password]);

  const onPressEmailLoginButton = async () => {
    if (inLoginProgress) return;
    setLoginType('EMAIL');
    if (!isValidForm) {
      // TODO: 토스트
      return;
    }
    const data = JSON.stringify(loginForm);
    const result = await emailLogin({ data, setInLoginProgress });
    navigation.navigate('Home');
  };

  const onPressAppleLoginButton = async () => {
    if (inLoginProgress) return;
    try {
      setInLoginProgress(true);
    } finally {
      setInLoginProgress(false);
    }
  };

  const onPressGoogleLoginButton = async () => {
    if (inLoginProgress) return;
    try {
      setInLoginProgress(true);
    } finally {
      setInLoginProgress(false);
    }
  };

  const onPressRegisterButton = () => {
    navigation.navigate('Register');
  };

  const onPressForgotPasswordButton = () => {
    navigation.navigate('ForgotPassword');
  };

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
