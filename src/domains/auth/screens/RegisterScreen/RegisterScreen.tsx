import React, { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { Container, RegisterBottomContainer, RegisterContainer } from './RegisterScreen.style';
import Screen from '../../../../components/Screen/Screen';
import BaseInput from '../../components/BaseInput/BaseInput';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import BaseButton from '../../components/BaseButton/BaseButton';
import { AuthDetailType, ItemType, RegisterFormType, RegisterType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import { isCompletelyDifferent, isValidEmail, isValidPassword } from '../../../../utils/common';
import TermsAgreement from './components/TermsAgreement';
import useAuth from '../../../../hooks/useAuth';

const initialAuthDetail = {
  age: '',
  gender: undefined,
  country: '',
};

const initialRegisterForm = {
  email: '',
  password: '',
  confirmedPassword: '',
  loginType: undefined,
};

const RegisterScreen = () => {
  const [registerForm, setRegisterForm] = useState<RegisterFormType>(initialRegisterForm);
  const [authDetail, setAuthDetail] = useState<AuthDetailType>(initialAuthDetail);
  const [isCheckedTermsAgreement, setIsCheckedTermsAgreement] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ItemType | undefined>(undefined);
  const [inProgress, setInProgress] = useState(false);
  const { register } = useAuth();

  const onChangeEmail = (text: string) => {
    setRegisterForm(prevState => ({ ...prevState, email: text }));
  };
  const onChangePassword = (text: string) => {
    setRegisterForm(prevState => ({ ...prevState, password: text }));
  };
  const onChangeConfirmedPassword = (text: string) => {
    setRegisterForm(prevState => ({ ...prevState, confirmedPassword: text }));
  };

  const isValidForm = useMemo(() => {
    return (
      isCompletelyDifferent(authDetail, initialAuthDetail) &&
      isValidEmail(registerForm.email) &&
      isValidPassword(registerForm.password) &&
      isValidPassword(registerForm.confirmedPassword) &&
      registerForm.password === registerForm.confirmedPassword &&
      !!registerForm.loginType &&
      isCheckedTermsAgreement
    );
  }, [
    authDetail,
    isCheckedTermsAgreement,
    registerForm.email,
    registerForm.password,
    registerForm.confirmedPassword,
    registerForm.loginType,
  ]);

  const onPressRegisterButton = async () => {
    if (inProgress) return;

    registerForm.loginType = 'EMAIL';
    if (!isValidForm) {
      // TODO: 추후 토스트와 연결
      Alert.alert('유효성 검사');
      return;
    }

    const params: RegisterType = { ...registerForm, ...authDetail };
    try {
      setInProgress(true);
      await register(params);
    } finally {
      setInProgress(false);
    }
  };

  useEffect(() => {
    if (selectedCountry)
      setAuthDetail(prevState => ({ ...prevState, country: selectedCountry.value }));
  }, [selectedCountry]);

  return (
    <Screen title="회원가입">
      <Container>
        <RegisterContainer>
          <BaseInput
            title="이메일"
            placeholder="이메일 입력"
            onChangeText={onChangeEmail}
            value={registerForm.email}
          />
          <BaseInput
            title="비밀번호"
            placeholder="비밀번호 입력"
            onChangeText={onChangePassword}
            value={registerForm.password ? registerForm.password : ''}
            isSecure
          />
          <BaseInput
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            onChangeText={onChangeConfirmedPassword}
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
          <BaseButton text="회원가입" onPress={onPressRegisterButton} />
        </RegisterBottomContainer>
      </Container>
    </Screen>
  );
};

export default RegisterScreen;
