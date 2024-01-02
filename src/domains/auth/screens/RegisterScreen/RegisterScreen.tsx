import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, RegisterBottomContainer, RegisterContainer } from './RegisterScreen.style';
import Screen from '../../../../components/Screen/Screen';
import BaseInput from '../../components/BaseInput/BaseInput';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import BaseButton from '../../components/BaseButton/BaseButton';
import { AuthDetailType, ItemType, RegisterFormType, RegisterType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import TermsAgreement from './components/TermsAgreement';
import useAuth from '../../../../hooks/useAuth';
import useToast from '../../../../hooks/useToast';

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
  const { showToast, ToastComponent } = useToast();

  const onChangeForm = (filed: string, value: string) => {
    setRegisterForm(prevState => ({ ...prevState, [filed]: value }));
  };

  const validationList = useMemo(
    () => [
      {
        validation: isValidEmail(registerForm.email),
        message: '이메일 형식이 올바르지 않습니다.',
      },
      {
        validation: isValidPassword(registerForm.password),
        message: '비밀번호를 확인해주세요.',
      },
      {
        validation: isValidPassword(registerForm.confirmedPassword),
        message: '비밀번호가 일치하지 않습니다.',
      },
      {
        validation: authDetail.age !== '' && !Number.isNaN(Number(authDetail.age)),
        message: '나이를 입력해주세요.',
      },
      {
        validation: authDetail.gender !== undefined,
        message: '성별을 선택해주세요.',
      },
      {
        validation: authDetail.country !== '',
        message: '국가를 선택해주세요.',
      },
      {
        validation: isCheckedTermsAgreement,
        message: '약관 동의가 필요합니다.',
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
    registerForm.loginType = 'EMAIL';

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
    <>
      {ToastComponent}
      <Screen title="회원가입">
        <Container>
          <RegisterContainer>
            <BaseInput
              title="이메일"
              placeholder="이메일 입력"
              onChangeText={text => onChangeForm('email', text)}
              value={registerForm.email}
            />
            <BaseInput
              title="비밀번호"
              placeholder="비밀번호 입력"
              onChangeText={text => onChangeForm('password', text)}
              value={registerForm.password ? registerForm.password : ''}
              isSecure
            />
            <BaseInput
              title="비밀번호 확인"
              placeholder="비밀번호 확인"
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
            <BaseButton text="회원가입" onPress={onPressRegisterButton} />
          </RegisterBottomContainer>
        </Container>
      </Screen>
    </>
  );
};

export default RegisterScreen;
