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
import useToast from '../../../../hooks/useToast';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { showPopup, AlertComponent } = usePopup();
  const { showToast, ToastComponent } = useToast();

  const alertMessage = ['입력하신 이메일 주소로', '임시 비밀번호를 발송했습니다.'];

  const onPressConfirm = () => {
    navigation.navigate('Login');
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onPressNextButton = () => {
    if (!isValidEmail(email)) {
      showToast({ message: '이메일 형식이 올바르지 않습니다.', isFailed: true });
      return;
    }
    // TODO: api

    showPopup({ text: alertMessage, onPressConfirm });
  };

  return (
    <>
      {ToastComponent}
      {AlertComponent}
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
              value={email}
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
    </>
  );
};

export default ForgotPasswordScreen;
