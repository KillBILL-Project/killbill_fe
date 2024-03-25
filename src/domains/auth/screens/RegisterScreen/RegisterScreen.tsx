import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { Container, RegisterBottomContainer, RegisterContainer } from './RegisterScreen.style';
import Screen from '../../../../components/Screen/Screen';
import BaseInput from '../../components/BaseInput/BaseInput';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import BaseButton from '../../components/BaseButton/BaseButton';
import { ItemType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import TermsAgreement from './components/TermsAgreement';
import useToast from '../../../../hooks/useToast';
import { requestRegister } from '../../../../services/api/authService';
import useAuth from '../../../../hooks/useAuth';
import { inProgressState } from '../../../../states';
import {
  AuthDetailType,
  LoginResponse,
  RegisterForm,
  RegisterRequest,
} from '../../../../types/auth';
import { getFcmToken, requestUserPermission } from '../../../../utils/push-notification';

const initialAuthDetail: AuthDetailType = {
  age: '',
  gender: undefined,
  country: '',
};

const initialRegisterForm: RegisterForm = {
  email: '',
  password: '',
  confirmedPassword: '',
};

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(initialRegisterForm);
  const [authDetail, setAuthDetail] = useState<AuthDetailType>(initialAuthDetail);
  const [isCheckedTermsAgreement, setIsCheckedTermsAgreement] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ItemType | undefined>(undefined);
  const [inProgress, setInProgress] = useRecoilState(inProgressState);
  const { setTokens } = useAuth();
  const { showToast } = useToast();
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
        validation: authDetail.age !== '' && !Number.isNaN(Number(authDetail.age)),
        message: t('register.validation.invalid_age'),
      },
      {
        validation: authDetail.gender !== undefined,
        message: t('register.validation.invalid_gender'),
      },
      {
        validation: authDetail.country !== '',
        message: t('register.validation.invalid_country'),
      },
      {
        validation: isCheckedTermsAgreement,
        message: t('register.validation.required_terms'),
      },
    ],
    [
      authDetail.age,
      authDetail.country,
      authDetail.gender,
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
    if (inProgress) return;
    if (!isValidForm()) return;

    try {
      setInProgress(true);
      const fcmToken = await getFcmToken();
      const pushConsent = await requestUserPermission();
      const params: RegisterRequest = {
        ...authDetail,
        email: registerForm.email,
        password: registerForm.password,
        fcmToken,
        pushConsent,
        loginType: 'EMAIL',
      };
      const response = await requestRegister<LoginResponse>(params);
      await setTokens({ ...response?.data.data });
    } finally {
      setInProgress(false);
    }
  };

  useEffect(() => {
    if (selectedCountry)
      setAuthDetail(prevState => ({ ...prevState, country: selectedCountry.value }));
  }, [selectedCountry]);

  return (
    <Screen title={t('register.title')}>
      <Container>
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
          <AuthDetail
            age={authDetail.age}
            gender={authDetail.gender}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedItem={selectedCountry}
            setSelectedItem={setSelectedCountry}
            setAuthDetail={setAuthDetail}
            itemList={COUNTRIES}
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
