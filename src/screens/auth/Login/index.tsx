import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import GoogleLoginIcon from '@assets/icon/login_icon_google.png';
import { BLACK, GREY300, GREY500, WHITE } from '@constants/colors';
import { AuthStackParamList } from '@type/navigation';
import { H1 } from '@components/Typography';
import { isIOS } from '@utils/platform';
import BaseInput from '@components/BaseInput';
import Spacer from '@components/Spacer';
import Screen from '@components/Screen';
import BaseButton from '@components/BaseButton';
import Separator from '@components/Separator';
import {
  AdditionalButtonContainer,
  Container,
  Greeting,
  KeyboardHideArea,
  LoginContainer,
  SsoLoginButtonContainer,
} from './styles';

import AdditionalButton from './AdditionalButton';
import useLogin from './useLogin';
import AppleLoginButton from './AppleLoginButton';

const LoginScreen = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const { t } = useTranslation();

  const { login, safeAreaHeight, loginForm, onChangeForm } = useLogin();

  const onPressEmailLoginButton = async () => login('EMAIL');
  const onPressGoogleLoginButton = async () => login('GOOGLE');

  const onPressRegisterButton = () => navigate('Register');
  const onPressForgotPasswordButton = () => navigate('ForgotPassword');

  return (
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
              <Separator margin={16} length={12} color={GREY300} />
              <AdditionalButton
                title={t('login.button.find_password')}
                onPress={onPressForgotPasswordButton}
              />
            </AdditionalButtonContainer>
          </LoginContainer>
          <SsoLoginButtonContainer>
            {isIOS && <AppleLoginButton login={login} />}
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
  );
};

export default LoginScreen;
