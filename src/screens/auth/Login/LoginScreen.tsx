import React, { useEffect, useState } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import {
  Container,
  EmailLoginContainer,
  AdditionalButtonContainer,
  AdditionalButton,
  Separator,
  AdditionalButtonText,
  GreetingBox,
  GreetingText,
  LoginButtonContainer,
} from './Login.style';

import GoogleLoginIcon from '../../../assets/icon/login_icon_google.png';
import AppleLoginIcon from '../../../assets/icon/login_icon_apple.png';
import api from '../../../api/api';
import { RootStackParamList } from '../../../navigation/types';
import { AuthButton, AuthInput, AuthInputText } from '../../components/Auth';
import { Margin } from '../../components/Auth.style';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../../../common/constants';
import Screen from '../../components/Screen';
import { BLACK, GOOGLE_LOGIN, GREY_4, WHITE } from '../../../common/colors';

const LoginScreen = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [inLoginProgress, setInLoginProgress] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onChangeEmail = (text: string) => setEnteredEmail(text);

  const onChangePassword = (text: string) => setEnteredPassword(text);

  const isValidEmail = () => EMAIL_PATTERN.test(enteredEmail);
  const isValidPassword = () => PASSWORD_PATTERN.test(enteredPassword);

  const loginRequest = {
    email: enteredEmail,
    password: enteredPassword,
    loginType: 'EMAIL',
  };

  const onPressEmailLoginButton = async () => {
    if (inLoginProgress) return;
    try {
      setInLoginProgress(true);
      const data = JSON.stringify(loginRequest);
      await api
        .post('/auth/login', data, {
          headers: { 'Content-Type': `application/json` },
        })
        .then(res => {
          console.log('res: ', res);
        });
    } catch (e) {
      Alert.alert('실패');
    } finally {
      setInLoginProgress(false);
    }

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

      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // 사용자가 로그인을 취소한 경우
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // 이미 로그인 프로세스가 진행 중인 경우
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Google Play 서비스가 설치되지 않은 경우
      } else {
        // 기타 오류 처리
      }
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

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: '1361813122-mn0eqsjcn0aar3cvr8on3grfo7agfi0h.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Screen isHeaderShown={false} backgroundColor={WHITE}>
      <Container>
        <EmailLoginContainer>
          <GreetingBox>
            <GreetingText>어서오세요.</GreetingText>
            <GreetingText>반가워해드릴게요</GreetingText>
          </GreetingBox>
          <AuthInput title="이메일">
            <AuthInputText
              placeholder="이메일 주소 입력"
              onChangeText={onChangeEmail}
              value={enteredEmail}
            />
          </AuthInput>
          <AuthInput title="패스워드">
            <AuthInputText
              isSecure
              placeholder="패스워드 입력"
              onChangeText={onChangePassword}
              value={enteredPassword}
            />
          </AuthInput>
          <Margin height={10} />
          <AuthButton
            onPress={onPressEmailLoginButton}
            text="로그인"
            backgroundColor={GREY_4}
            color="white"
          />
          <AdditionalButtonContainer>
            <AdditionalButton>
              <AdditionalButtonText onPress={onPressRegisterButton}>
                이메일 회원가입
              </AdditionalButtonText>
            </AdditionalButton>
            <Separator>|</Separator>
            <AdditionalButton>
              <AdditionalButtonText onPress={onPressForgotPasswordButton}>
                비밀번호 찾기
              </AdditionalButtonText>
            </AdditionalButton>
          </AdditionalButtonContainer>
        </EmailLoginContainer>
        <LoginButtonContainer>
          <AuthButton
            onPress={onPressAppleLoginButton}
            text="Apple로 시작하기"
            backgroundColor={BLACK}
            color={WHITE}
            icon={AppleLoginIcon}
          />
          <AuthButton
            onPress={onPressGoogleLoginButton}
            text="Google로 시작하기"
            backgroundColor={WHITE}
            color={GOOGLE_LOGIN}
            icon={GoogleLoginIcon}
          />
        </LoginButtonContainer>
      </Container>
    </Screen>
  );
};

export default LoginScreen;
