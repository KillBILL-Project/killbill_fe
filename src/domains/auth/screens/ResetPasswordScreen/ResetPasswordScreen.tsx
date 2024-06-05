import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Container,
  ResetPasswordBottomContainer,
  ResetPasswordContainer,
} from './ResetPassword.style';
import BaseInput from '../../components/BaseInput/BaseInput';
import BaseButton from '../../components/BaseButton/BaseButton';
import Screen from '../../../../components/Screen/Screen';
import { isValidPassword } from '../../../../utils/common';
import useToast from '../../../../hooks/useToast';
import { useDialog } from '../../../../states/context/DialogContext';
import { requestChangePassword } from '../../../../services/api/authService';
import { MyPageParamList } from '../../../../types/navigation';
import UseAuth from '../../../../hooks/useAuth';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const { showAlert } = useDialog();
  const { showToast } = useToast();
  const { logout } = UseAuth();
  const { t } = useTranslation();

  const onChangePassword = (enteredPassword: string) => setPassword(enteredPassword);
  const onChangeConfirmedPassword = (enteredPassword: string) =>
    setConfirmedPassword(enteredPassword);

  const alertMessage = [
    t('reset_password.alert.reset_password.0'),
    t('reset_password.alert.reset_password.1'),
  ];

  const validationList = useMemo(
    () => [
      {
        validation: isValidPassword(password),
        message: t('register.validation.invalid_password'),
      },
      {
        validation: isValidPassword(confirmedPassword),
        message: t('register.validation.not_equal_password'),
      },
    ],
    [confirmedPassword, password, t],
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

  const onPressSave = async () => {
    if (!isValidForm()) {
      return;
    }
    try {
      await requestChangePassword({ password });
      await showAlert({ alertMessage });
      logout();
    } catch (e) {
      showToast({ message: '일시적인 오류가 발생했습니다. 다시 시도해주세요.', isFailed: true });
    }
  };

  return (
    <Screen title={t('reset_password.title')}>
      <Container>
        <ResetPasswordContainer>
          <BaseInput
            title={t('reset_password.input.password.title')}
            placeholder={t('reset_password.input.password.placeholder')}
            onChangeText={onChangePassword}
            value={password}
            isSecure
          />
          <BaseInput
            title={t('reset_password.input.confirmed_password.title')}
            placeholder={t('reset_password.input.confirmed_password.placeholder')}
            onChangeText={onChangeConfirmedPassword}
            value={confirmedPassword}
            isSecure
          />
        </ResetPasswordContainer>
        <ResetPasswordBottomContainer>
          <BaseButton text={t('reset_password.button.submit')} onPress={onPressSave} />
        </ResetPasswordBottomContainer>
      </Container>
    </Screen>
  );
};

export default ResetPasswordScreen;
