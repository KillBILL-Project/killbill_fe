import React from 'react';
import Screen from '../../../../components/Screen/Screen';
import Scroll from './components/Scroll';
import { Container, Test } from './NotifySettingScreen.style';
import Spacer from '../../../../components/Spacer/Spacer';

const NotifySettingScreen = () => {
  return (
    <Screen title="알림 설정">
      <Container>
        <Scroll />
        <Spacer width={66} />
        <Scroll />
        <Test />
        <Scroll />
      </Container>
    </Screen>
  );
};

export default NotifySettingScreen;
