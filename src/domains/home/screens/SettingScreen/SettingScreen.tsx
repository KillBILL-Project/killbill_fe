import React, { useRef, useState } from 'react';
import { Switch } from 'react-native-switch';
import { useRecoilState } from 'recoil';
import { toUpper } from 'lodash';
import Screen from '../../../../components/Screen/Screen';
import { Bold18, Regular16 } from '../../../../components/Typography';
import { BLACK, GREY500, WHITE } from '../../../../constants/colors';
import Separator from '../../../../components/Separator/Separator';
import { ratio, width } from '../../../../utils/platform';
import {
  Box,
  Container,
  PushContainer,
  PushTitle,
  PushToggleSwitch,
  Title,
} from './SettingScreen.style';
import { userState } from '../../../../states';
import { updatePushConsent } from '../../../../services/api/authService';

const SettingScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isAgree, setIsAgree] = useState<boolean>(!!user?.pushConsent);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onSwitch = () => {
    setIsAgree(prevState => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(async () => {
        if (prevState === user?.pushConsent) {
          try {
            await updatePushConsent({ pushConsent: !prevState });
            setUser(prev => (prev !== null ? { ...prev, pushConsent: !prevState } : null));
          } finally {
            timeoutRef.current = null;
          }
        }
      }, 500);

      return !prevState;
    });
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
          <Regular16 color={BLACK}>{toUpper(user?.country)}</Regular16>
        </Box>
      </Container>
    </Screen>
  );
};

export default SettingScreen;
