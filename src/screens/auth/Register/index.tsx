import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { isValidEmail, isValidPassword } from '@utils/common';
import { RegisterForm } from '@type/auth';
import { AuthStackParamList } from '@type/navigation';
import useToast from '@hooks/useToast';
import Screen from '@components/Screen';
import BaseInput from '@components/BaseInput';
import TermsAgreement from '@screens/auth/Register/TermsAgreement';
import BaseButton from '@components/BaseButton';
import { Container, RegisterBottomContainer, RegisterContainer } from './styles';

const initialRegisterForm: RegisterForm = {
  email: '',
  password: '',
  confirmedPassword: '',
};

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(initialRegisterForm);
  const [isCheckedTermsAgreement, setIsCheckedTermsAgreement] = useState(false);
  const { showToast } = useToast();
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

  const { t } = useTranslation();

  const onChangeForm = (filed: string, value: string) => {
    setRegisterForm(prevState => ({ ...prevState, [filed]: value }));
  };

  const validationList = useMemo(
    () => [
      {
        validation: isValidEmail(registerForm.email),
        message: t('register.validation.invalid_email'),
      },
      {
        validation: isValidPassword(registerForm.password),
        message: t('register.validation.invalid_password'),
      },
      {
        validation: isValidPassword(registerForm.confirmedPassword),
        message: t('register.validation.not_equal_password'),
      },
      {
        validation: isCheckedTermsAgreement,
        message: t('register.validation.required_terms'),
      },
    ],
    [
      isCheckedTermsAgreement,
      registerForm.confirmedPassword,
      registerForm.email,
      registerForm.password,
      t,
    ],
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

  const onPressRegisterButton = async () => {
    if (!isValidForm()) return;

    navigate('AuthDetail', {
      email: registerForm.email,
      password: registerForm.password,
      loginType: 'EMAIL',
    });
  };

  return (
    <Screen title={t('register.title')}>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <RegisterContainer>
          <BaseInput
            title={t('register.input.email.title')}
            placeholder={t('register.input.email.placeholder')}
            onChangeText={text => onChangeForm('email', text)}
            value={registerForm.email}
          />
          <BaseInput
            title={t('register.input.password.title')}
            placeholder={t('register.input.password.placeholder')}
            onChangeText={text => onChangeForm('password', text)}
            value={registerForm.password ? registerForm.password : ''}
            isSecure
          />
          <BaseInput
            title={t('register.input.confirmed_password.title')}
            placeholder={t('register.input.confirmed_password.placeholder')}
            onChangeText={text => onChangeForm('confirmedPassword', text)}
            value={registerForm.confirmedPassword ? registerForm.confirmedPassword : ''}
            isSecure
          />
        </RegisterContainer>
        <RegisterBottomContainer>
          <TermsAgreement
            isCheckedTermsAgreement={isCheckedTermsAgreement}
            setIsCheckedTermsAgreement={setIsCheckedTermsAgreement}
          />
          <BaseButton text={t('register.button.submit')} onPress={onPressRegisterButton} />
        </RegisterBottomContainer>
      </Container>
    </Screen>
  );
};

export default RegisterScreen;
