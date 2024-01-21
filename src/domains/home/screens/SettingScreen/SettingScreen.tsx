import React, { useState } from 'react';
import { Switch } from 'react-native-switch';
import Screen from '../../../../components/Screen/Screen';
import { Bold18, Regular16 } from '../../../../components/Typography/Typography';
import { BLACK, BTN_DESELECTED_BG, GREY500, WHITE } from '../../../../constants/colors';
import Separator from '../../../../components/Separator/Separator';
import { ratio, width } from '../../../../utils/platform';
import {
  Container,
  PushContainer,
  PushTitle,
  PushToggleSwitch,
  Title,
  Box,
} from './SettingScreen.style';

const SettingScreen = () => {
  const [isAgree, setIsAgree] = useState(false);

  const onSwitch = () => {
    setIsAgree(prevState => !prevState);
  };

  return (
    <Screen title="설정">
      <Container>
        <PushContainer>
          <PushTitle>
            <Bold18 color={BLACK}>Push 알림 여부</Bold18>
          </PushTitle>
          <PushToggleSwitch>
            <Switch
              value={isAgree}
              onValueChange={onSwitch}
              circleSize={ratio * 18}
              innerCircleStyle={{ backgroundColor: WHITE }}
              backgroundActive={BLACK}
              backgroundInactive={GREY500}
              activeText=""
              inActiveText=""
            />
          </PushToggleSwitch>
        </PushContainer>
        <Separator horizontal length={width} margin={24} thickness={8} />
        <Title>
          <Bold18 color={BLACK}>국가 정보</Bold18>
        </Title>
        <Box>
          <Regular16 color={BLACK}>KOREA</Regular16>
        </Box>
      </Container>
    </Screen>
  );
};

export default SettingScreen;
