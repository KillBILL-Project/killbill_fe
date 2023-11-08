import React, { useState } from 'react';

import {
  AuthButtonContainer,
  Container,
  FullScreen,
  InputContainer,
  NotificationBox,
  NotificationButton,
  NotificationButtonText,
  NotificationContainer,
  NotificationText,
  OuterContainer,
} from './ResetPassword.style';
import Screen from '../../components/Screen';
import { ORANGE, WHITE } from '../../../common/colors';
import { AuthButton, AuthInput, AuthInputText } from '../../components/Auth';
import { PASSWORD_PATTERN } from '../../../common/constants';

const AuthDetailScreen = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmedPassword, setEnteredConfirmedPassword] = useState('');

  const isValidPassword = PASSWORD_PATTERN.test(enteredPassword);
  const isValidConfirmedPassword = PASSWORD_PATTERN.test(enteredPassword);
  const isEqualPassword = enteredPassword === enteredConfirmedPassword;

  const onChangeEnteredPassword = (email: string) => {
    setEnteredPassword(email);
  };

  const onChangeEnteredConfirmedPassword = (email: string) => {
    setEnteredConfirmedPassword(email);
  };

  const onPressSaveButton = () => {
    if (!isValidPassword || !isValidConfirmedPassword) {
      // TODO: 토스트
      return;
    }

    if (!isEqualPassword) {
      // TODO: 토스트
      return;
    }

    setIsComplete(true);
  };

  return (
    <>
      <Screen title="비밀번호 재설정">
        <Container>
          <InputContainer>
            <AuthInput title="변경할 비밀번호">
              <AuthInputText
                placeholder="대소문자, 숫자, 기호 포함 8자리"
                onChangeText={onChangeEnteredPassword}
                value={enteredPassword}
              />
            </AuthInput>
            <AuthInput title="비밀번호 확인">
              <AuthInputText
                placeholder="대소문자, 숫자, 기호 포함 8자리"
                onChangeText={onChangeEnteredConfirmedPassword}
                value={enteredConfirmedPassword}
              />
            </AuthInput>
          </InputContainer>
          <AuthButtonContainer>
            <AuthButton
              text="저장"
              onPress={onPressSaveButton}
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
                <NotificationText>비밀번호가 재설정되었습니다.</NotificationText>
                <NotificationText>다시 로그인해주세요.</NotificationText>
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
