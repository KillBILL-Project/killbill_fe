import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import {
  AuthButtonContainer,
  Container,
  InfoMessage,
  InfoMessageText,
  InputContainer,
} from './ForgotPassword.style';
import Screen from '../../../../components/Screen/Screen';
import BaseInput from '../../components/BaseInput/BaseInput';
import { BLACK, PRIMARY } from '../../../../constants/colors';
import BaseButton from '../../components/BaseButton/BaseButton';
import { AuthStackParamList, HomeStackParamList } from '../../../../types/navigation';
import usePopup from '../../../../hooks/usePopup';
import { isValidEmail } from '../../../../utils/common';
import useToast from '../../../../hooks/useToast';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { showPopup, AlertComponent } = usePopup();
  const { showToast, ToastComponent } = useToast();
  const { t } = useTranslation();

  const alertMessage = [
    t('forgot_password.alert.sent_email.0'),
    t('forgot_password.alert.sent_email.1'),
  ];

  const onPressConfirm = () => {
    navigation.navigate('Login');
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onPressNextButton = () => {
    if (!isValidEmail(email)) {
      showToast({ message: t('forgot_password.validation.invalid_email'), isFailed: true });
      return;
    }
    // TODO: api

    showPopup({ text: alertMessage, onPressConfirm });
  };

  return (
    <>
      {ToastComponent}
      {AlertComponent}
      <Screen title={t('forgot_password.title')}>
        <Container>
          <InputContainer>
            <InfoMessage>
              <InfoMessageText>{t('forgot_password.info_message.0')}</InfoMessageText>
              <InfoMessageText>{t('forgot_password.info_message.1')}</InfoMessageText>
            </InfoMessage>
            <BaseInput
              title={t('forgot_password.input.email.title')}
              placeholder={t('forgot_password.input.email.placeholder')}
              onChangeText={onChangeEmail}
              value={email}
            />
          </InputContainer>
          <AuthButtonContainer>
            <BaseButton
              text={t('forgot_password.button.submit')}
              onPress={onPressNextButton}
              backgroundColor={PRIMARY}
              color={BLACK}
            />
          </AuthButtonContainer>
        </Container>
      </Screen>
    </>
  );
};

export default ForgotPasswordScreen;
