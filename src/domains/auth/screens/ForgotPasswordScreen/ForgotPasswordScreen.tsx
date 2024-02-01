import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
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
import { AuthStackParamList } from '../../../../types/navigation';
import { isValidEmail } from '../../../../utils/common';
import useToast from '../../../../hooks/useToast';
import { useDialog } from '../../../../states/context/DialogContext';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const { showToast } = useToast();
  const { t } = useTranslation();
  const { showAlert } = useDialog();

  const alertMessage = [
    t('forgot_password.alert.sent_email.0'),
    t('forgot_password.alert.sent_email.1'),
  ];

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onPressNextButton = async () => {
    if (!isValidEmail(email)) {
      showToast({ message: t('forgot_password.validation.invalid_email'), isFailed: true });
      return;
    }
    // TODO: api

    await showAlert({ alertMessage });
    navigate('Login');
  };

  return (
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
  );
};

export default ForgotPasswordScreen;
