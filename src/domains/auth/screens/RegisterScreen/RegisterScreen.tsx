import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Container,
  RegisterContainer,
  TermsAgreementButton,
  TermsAgreementButtonText,
  TermsAgreementCheckBox,
  TermsAgreementContainer,
  TermsAgreementDetailButton,
  TermsAgreementDetailButtonText,
} from './RegisterScreen.style';
import Screen from '../../../../components/Screen/Screen';
import BaseInput from '../../components/BaseInput/BaseInput';
import AuthDetail from '../../components/AuthDetail/AuthDetail';
import BaseButton from '../../components/BaseButton/BaseButton';
import { AuthDetailType, LoginType } from '../../../../types/common';
import { COUNTRIES } from '../../../../constants/constants';
import { WHITE, ORANGE } from '../../../../constants/colors';
import { isValidEmail, isValidPassword } from '../../../../utils/common';
import { RootStackParamList } from '../../../../types/navigation';
import { emailRegister } from '../../../../services/api/authService';

import checkedIcon from '../../../../assets/icon/checked.png';
import uncheckedIcon from '../../../../assets/icon/unchecked.png';

interface RegisterFormType {
  email: string;
  password: string;
  confirmedPassword: string;
  loginType: LoginType | undefined;
}

interface TermsAgreementProps {
  isCheckedTermsAgreement: boolean;
  setIsCheckedTermsAgreement: Dispatch<SetStateAction<boolean>>;
}

const initialAuthDetail = {
  age: '',
  gender: undefined,
  country: undefined,
};

const initialRegisterForm = {
  email: '',
  password: '',
  confirmedPassword: '',
  loginType: undefined,
};

const TermsAgreement = ({
  isCheckedTermsAgreement,
  setIsCheckedTermsAgreement,
}: TermsAgreementProps) => {
  const onPressTermsAgreementButton = () => setIsCheckedTermsAgreement(prevState => !prevState);

  return (
    <TermsAgreementContainer>
      <TermsAgreementButton onPress={onPressTermsAgreementButton}>
        {isCheckedTermsAgreement ? (
          <TermsAgreementCheckBox source={checkedIcon} />
        ) : (
          <TermsAgreementCheckBox source={uncheckedIcon} />
        )}
        <TermsAgreementButtonText>서비스 이용약관 동의 (필수)</TermsAgreementButtonText>
      </TermsAgreementButton>
      <TermsAgreementDetailButton>
        <TermsAgreementDetailButtonText>{'자세히 >'}</TermsAgreementDetailButtonText>
      </TermsAgreementDetailButton>
    </TermsAgreementContainer>
  );
};

export default () => {
  const [registerForm, setRegisterForm] = useState<RegisterFormType>(initialRegisterForm);
  const [authDetail, setAuthDetail] = useState<AuthDetailType>(initialAuthDetail);
  const [isCheckedTermsAgreement, setIsCheckedTermsAgreement] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inRegisterProgress, setInRegisterProgress] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onChangeEmail = (text: string) => {
    setRegisterForm(prevState => ({ ...prevState, email: text }));
  };
  const onChangePassword = (text: string) => {
    setRegisterForm(prevState => ({ ...prevState, password: text }));
  };
  const onChangeConfirmedPassword = (text: string) => {
    setRegisterForm(prevState => ({ ...prevState, confirmedPassword: text }));
  };
  const setLoginType = (text: LoginType) => {
    setRegisterForm(prevState => ({ ...prevState, loginType: text }));
  };

  const isValidForm = useMemo(() => {
    return (
      !_.isEqual(registerForm, initialRegisterForm) &&
      !_.isEqual(authDetail, initialAuthDetail) &&
      isValidEmail(registerForm.email) &&
      isValidPassword(registerForm.password) &&
      isValidPassword(registerForm.confirmedPassword) &&
      registerForm.password === registerForm.confirmedPassword &&
      isCheckedTermsAgreement
    );
  }, [authDetail, isCheckedTermsAgreement, registerForm]);

  const onPressRegisterButton = async () => {
    if (!isValidForm) {
      // TODO: 추후 토스트와 연결
      return;
    }

    const data = JSON.stringify(registerForm);
    const result = await emailRegister({ data, setInRegisterProgress });

    navigation.navigate('Home');
  };

  return (
    <Screen title="회원가입" isHeaderShown>
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
            value={registerForm.password}
            isSecure
          />
          <BaseInput
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            onChangeText={onChangeConfirmedPassword}
            value={registerForm.confirmedPassword}
            isSecure
          />
          <AuthDetail
            age={authDetail.age}
            gender={authDetail.gender}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedItem={authDetail.country}
            setAuthDetail={setAuthDetail}
            itemList={COUNTRIES}
          />
          <TermsAgreement
            isCheckedTermsAgreement={isCheckedTermsAgreement}
            setIsCheckedTermsAgreement={setIsCheckedTermsAgreement}
          />
          <BaseButton
            text="회원가입"
            onPress={onPressRegisterButton}
            backgroundColor={ORANGE}
            color={WHITE}
          />
        </RegisterContainer>
      </Container>
    </Screen>
  );
};
