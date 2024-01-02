import React, { useMemo, useState } from 'react';
import {
  Container,
  ResetPasswordBottomContainer,
  ResetPasswordContainer,
} from './ResetPassword.style';
import BaseInput from '../../components/BaseInput/BaseInput';
import BaseButton from '../../components/BaseButton/BaseButton';
import Screen from '../../../../components/Screen/Screen';
import { isValidPassword } from '../../../../utils/common';
import Alert from '../../../../components/Popup/Alert';
import Backdrop from '../../../../components/Backdrop/Backdrop';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const onChangePassword = (enteredPassword: string) => setPassword(enteredPassword);
  const onChangeConfirmedPassword = (enteredPassword: string) =>
    setConfirmedPassword(enteredPassword);

  const isValid = useMemo(() => {
    return (
      isValidPassword(password) &&
      isValidPassword(confirmedPassword) &&
      password === confirmedPassword
    );
  }, [password, confirmedPassword]);

  const onPressSave = () => {
    if (!isValid) {
      // TODO: 토스트
      return;
    }
    // TODO: api

    setIsComplete(true);
  };

  return isComplete ? (
    <Backdrop>
      <Alert
        text={['비밀번호가 재설정되었습니다.', '다시 로그인해 주세요.']}
        onPressConfirm={onPressSave}
      />
    </Backdrop>
  ) : (
    <Screen title="비밀번호 재설정">
      <Container>
        <ResetPasswordContainer>
          <BaseInput
            title="변경할 비밀번호"
            placeholder="대소문자, 숫자, 기호 포함 8자리 이상"
            onChangeText={onChangePassword}
            value={password}
            isSecure
          />
          <BaseInput
            title="비밀번호 확인"
            placeholder="대소문자, 숫자, 기호 포함 8자리 이상"
            onChangeText={onChangeConfirmedPassword}
            value={confirmedPassword}
            isSecure
          />
        </ResetPasswordContainer>
        <ResetPasswordBottomContainer>
          <BaseButton text="저장" onPress={onPressSave} />
        </ResetPasswordBottomContainer>
      </Container>
    </Screen>
  );
};

export default ResetPasswordScreen;
