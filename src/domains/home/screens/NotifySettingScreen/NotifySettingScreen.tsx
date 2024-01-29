import React, { useState } from 'react';
import Screen from '../../../../components/Screen/Screen';
import { Container } from './NotifySettingScreen.style';

const NotifySettingScreen = () => {
  const [data] = useState(
    Array(24)
      .fill(0)
      .map((_, index) => {
        return {
          value: index,
          label: index < 10 ? `0${index}` : index,
        };
      }),
  );
  return (
    <Screen title="알림 설정">
      <Container />
    </Screen>
  );
};

export default NotifySettingScreen;
