import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../../../common/constants';
import checkedIcon from '../../../assets/icon/checked.png';
import uncheckedIcon from '../../../assets/icon/unchecked.png';
import { RootStackParamList } from '../../../navigation/types';

import {
  Container,
  AuthInputContainer,
  BottomContainer,
  BottomButtonContainer,
  TermsAgreementContainer,
  TermsAgreementButton,
  TermsAgreementCheckBox,
  TermsAgreementButtonText,
  TermsAgreementDetailButton,
  TermsAgreementDetailButtonText,
} from './Register.style';
import Screen from '../../components/Screen';
import { ORANGE, WHITE } from '../../../common/colors';
import { AuthButton, AuthDetail, AuthInput, AuthInputText, ItemType } from '../../components/Auth';
import { Gender } from '../../../common/types';
import api from '../../../api/api';

const countries = [
  { label: 'Korea', value: 'korea' },
  { label: 'Japan', value: 'japan' },
  { label: 'China', value: 'china' },
];

const ResisterScreen = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmedPassword, setEnteredConfirmedPassword] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender>(undefined);
  const [isCheckedTermsAgreement, setIsCheckedTermsAgreement] = useState(false);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ItemType | undefined>(undefined);
  const [countryList, setCountryList] = useState<ItemType[]>([]);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressTermsAgreementButton = () => setIsCheckedTermsAgreement(prevState => !prevState);

  const onChangeEmail = (email: string) => setEnteredEmail(email.trim());
  const onChangePassword = (password: string) => setEnteredPassword(password.trim());
  const onChangeConfirmedPassword = (confirmedPassword: string) =>
    setEnteredConfirmedPassword(confirmedPassword.trim());

  const isValidEmail = EMAIL_PATTERN.test(enteredEmail);
  const isValidPassword = PASSWORD_PATTERN.test(enteredPassword);
  const isValidConfirmedPassword = PASSWORD_PATTERN.test(enteredConfirmedPassword);
  const isValidAge = !Number.isNaN(Number(enteredAge)) && Number(enteredAge) > 0;
  const isValidGender = selectedGender !== undefined;
  const isValidCountry = selectedCountry?.value !== undefined;
  const isEqualPassword = enteredPassword === enteredConfirmedPassword;

  const registerForm = {
    email: enteredEmail,
    password: enteredPassword,
    age: enteredAge,
    loginType: 'EMAIL',
    gender: selectedGender,
    country: selectedCountry?.value,
  };

  const onPressRegisterButton = async () => {
    // TODO: 추후 토스트와 연결
    if (!isValidEmail) return;
    if (!isValidPassword) return;
    if (!isValidConfirmedPassword) return;
    if (!isValidAge) return;
    if (!isValidGender) return;
    if (!isValidCountry) return;
    if (!isEqualPassword) return;
    if (!isCheckedTermsAgreement) return;

    try {
      await api
        .post('/auth/register', JSON.stringify(registerForm), {
          headers: { 'Content-Type': `application/json` },
        })
        .then(res => res.data);
    } catch (e) {
      Alert.alert('실패');
      return;
    }

    navigation.navigate('Home');
  };

  useEffect(() => {
    setCountryList(countries);
  }, []);

  return (
    <Screen title="회원가입" isHeaderShown>
      <Container>
        <AuthInputContainer>
          <AuthInput title="이메일">
            <AuthInputText
              placeholder="이메일 입력"
              onChangeText={onChangeEmail}
              value={enteredEmail}
            />
          </AuthInput>
          <AuthInput title="비밀번호">
            <AuthInputText
              placeholder="비밀번호 입력"
              onChangeText={onChangePassword}
              value={enteredPassword}
              isSecure
            />
          </AuthInput>
          <AuthInput title="비밀번호 확인">
            <AuthInputText
              placeholder="비밀번호 확인"
              onChangeText={onChangeConfirmedPassword}
              value={enteredConfirmedPassword}
              isSecure
            />
          </AuthInput>
          <AuthDetail
            age={enteredAge}
            setAge={setEnteredAge}
            gender={selectedGender}
            setGender={setSelectedGender}
            isOpen={isDropDownOpen}
            setIsOpen={setIsDropDownOpen}
            selectedItem={selectedCountry}
            setSelectedItem={setSelectedCountry}
            itemList={countryList}
          />
        </AuthInputContainer>
        <BottomContainer>
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
          <BottomButtonContainer>
            <AuthButton
              text="회원가입"
              onPress={onPressRegisterButton}
              backgroundColor={ORANGE}
              color={WHITE}
            />
          </BottomButtonContainer>
        </BottomContainer>
      </Container>
    </Screen>
  );
};

export default ResisterScreen;
