import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
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
import { RootStackParamList } from '../../../../types/navigation';
import usePopup from '../../../../hooks/usePopup';
import { isValidEmail } from '../../../../utils/common';

const ForgotPasswordScreen = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { showPopup, AlertComponent } = usePopup();

  const alertMessage = ['입력하신 이메일 주소로', '임시 비밀번호를 발송했습니다.'];

  const onPressConfirm = () => {
    navigation.navigate('Login');
  };

  const onChangeEmail = (email: string) => {
    setEnteredEmail(email);
  };

  const onPressNextButton = () => {
    if (!isValidEmail(enteredEmail)) {
      // TODO: 토스트
      return;
    }
    // TODO: api

    showPopup({ text: alertMessage, onPressConfirm });
  };

  return (
    <>
      <Screen title="비밀번호 찾기">
        <Container>
          <InputContainer>
            <InfoMessage>
              <InfoMessageText>비밀번호를 확인할 이메일을</InfoMessageText>
              <InfoMessageText>입력해주세요.</InfoMessageText>
            </InfoMessage>
            <BaseInput
              title="이메일"
              placeholder="이메일을 입력해주세요."
              onChangeText={onChangeEmail}
              value={enteredEmail}
            />
          </InputContainer>
          <AuthButtonContainer>
            <BaseButton
              text="다음"
              onPress={onPressNextButton}
              backgroundColor={PRIMARY}
              color={BLACK}
            />
          </AuthButtonContainer>
        </Container>
      </Screen>
      {AlertComponent}
    </>
  );
};

export default ForgotPasswordScreen;
