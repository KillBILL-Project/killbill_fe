import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { BLACK, PRIMARY } from '@constants/colors';
import { AuthStackParamList } from '@type/navigation';
import { isValidEmail } from '@utils/common';
import useToast from '@hooks/useToast';
import Screen from '@components/Screen';
import BaseInput from '@components/BaseInput';
import BaseButton from '@components/BaseButton';
import useAlert from '@hooks/useAlert';
import {
  AuthButtonContainer,
  Container,
  InfoMessage,
  InfoMessageText,
  InputContainer,
} from './styles';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const { showToast } = useToast();
  const { t } = useTranslation();
  const { showAlert, Alert } = useAlert();

  const alertMessage = t('forgot_password.alert.sent_email');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onPressNextButton = async () => {
    if (!isValidEmail(email)) {
      showToast({ message: t('forgot_password.validation.invalid_email'), isFailed: true });
      return;
    }
    // TODO: api

    showAlert({ content: alertMessage, confirmAction: () => navigate('Login') });
  };

  return (
    <Screen title={t('forgot_password.title')}>
      <Container>
        <Alert />
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
  );
};

export default ForgotPasswordScreen;
