import React, { useState } from 'react';

import {
  AuthButtonContainer,
  Container,
  FullScreen,
  InfoMessageBox,
  InfoMessageText,
  InputContainer,
  NotificationBox,
  NotificationButton,
  NotificationButtonText,
  NotificationContainer,
  NotificationText,
  OuterContainer,
} from './ForgotPassword.style';
import Screen from '../../components/Screen';
import { ORANGE, WHITE } from '../../../common/colors';
import { AuthButton, AuthInput, AuthInputText } from '../../components/Auth';
import { EMAIL_PATTERN } from '../../../common/constants';

const AuthDetailScreen = () => {
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

    setIsComplete(true);
  };

  return (
    <>
      <Screen title="비밀번호 찾기">
        <Container>
          <InputContainer>
            <InfoMessageBox>
              <InfoMessageText>비밀번호를 확인할 이메일을</InfoMessageText>
              <InfoMessageText>입력해주세요.</InfoMessageText>
            </InfoMessageBox>
            <AuthInput title="이메일">
              <AuthInputText
                placeholder="이메일을 입력해주세요."
                onChangeText={onChangeEmail}
                value={enteredEmail}
              />
            </AuthInput>
          </InputContainer>
          <AuthButtonContainer>
            <AuthButton
              text="다음"
              onPress={onPressNextButton}
              backgroundColor={ORANGE}
              color={WHITE}
            />
          </AuthButtonContainer>
        </Container>
      </Screen>
      {isComplete ? (
        <FullScreen>
          <OuterContainer>
            <NotificationContainer>
              <NotificationBox>
                <NotificationText>입력하신 이메일 주소로</NotificationText>
                <NotificationText>임시 비밀번호를 발송했습니다.</NotificationText>
              </NotificationBox>
              <NotificationButton>
                <NotificationButtonText>확인</NotificationButtonText>
              </NotificationButton>
            </NotificationContainer>
          </OuterContainer>
        </FullScreen>
      ) : null}
    </>
  );
};

export default AuthDetailScreen;
