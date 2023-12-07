import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  AuthButtonContainer,
  Container,
  FullScreen,
  InfoMessage,
  InfoMessageText,
  InputContainer,
  Notification,
  NotificationButton,
  NotificationButtonText,
  NotificationContainer,
  NotificationText,
  BackDropContainer,
} from './ForgotPassword.style';
import Screen from '../../../../components/Screen/Screen';
import BaseInput from '../../components/BaseInput/BaseInput';
import { ORANGE, WHITE } from '../../../../constants/colors';
import BaseButton from '../../components/BaseButton/BaseButton';
import { EMAIL_PATTERN } from '../../../../constants/constants';
import { RootStackParamList } from '../../../../types/navigation';

const BackDrop = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressConfirm = () => {
    navigation.navigate('Login');
  };

  return (
    <FullScreen>
      <BackDropContainer>
        <NotificationContainer>
          <Notification>
            <NotificationText>입력하신 이메일 주소로</NotificationText>
            <NotificationText>임시 비밀번호를 발송했습니다.</NotificationText>
          </Notification>
          <NotificationButton onPress={onPressConfirm}>
            <NotificationButtonText>확인</NotificationButtonText>
          </NotificationButton>
        </NotificationContainer>
      </BackDropContainer>
    </FullScreen>
  );
};

const ForgotPasswordScreen = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');

  const isValidEmail = EMAIL_PATTERN.test(enteredEmail);

  const onChangeEmail = (email: string) => {
    setEnteredEmail(email);
  };

  const onPressNextButton = () => {
    if (!isValidEmail) {
      // TODO: 토스트
      return;
    }
    // TODO: api

    setIsComplete(true);
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
              backgroundColor={ORANGE}
              color={WHITE}
            />
          </AuthButtonContainer>
        </Container>
      </Screen>
      {isComplete && <BackDrop />}
    </>
  );
};

export default ForgotPasswordScreen;
