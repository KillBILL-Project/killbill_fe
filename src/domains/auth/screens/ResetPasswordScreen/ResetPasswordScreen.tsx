import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
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
import usePopup from '../../../../hooks/usePopup';
import { HomeStackParamList } from '../../../../types/navigation';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const { showPopup, AlertComponent } = usePopup();
  const { showToast, ToastComponent } = useToast();
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const { t } = useTranslation();

  const onChangePassword = (enteredPassword: string) => setPassword(enteredPassword);
  const onChangeConfirmedPassword = (enteredPassword: string) =>
    setConfirmedPassword(enteredPassword);

  const alertMessage = [
    t('forgot_password.alert.reset_password.0'),
    t('forgot_password.alert.reset_password.1'),
  ];

  const onPressConfirm = () => {
    navigation.navigate('Login');
  };

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

  const onPressSave = () => {
    if (!isValidForm()) {
      // TODO: api
      return;
    }
    showPopup({ text: alertMessage, onPressConfirm });
  };

  return (
    <>
      {AlertComponent}
      {ToastComponent}
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
    </>
  );
};

export default ResetPasswordScreen;
