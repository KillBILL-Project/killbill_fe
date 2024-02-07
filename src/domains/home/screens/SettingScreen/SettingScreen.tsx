import React, { useRef, useState } from 'react';
import { Switch } from 'react-native-switch';
import { useRecoilState } from 'recoil';
import { toUpper } from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Screen from '../../../../components/Screen/Screen';
import { Bold18, Medium16, Regular16 } from '../../../../components/Typography';
import { BLACK, GREY500, GREY600, WHITE } from '../../../../constants/colors';
import Separator from '../../../../components/Separator/Separator';
import { ratio, width } from '../../../../utils/platform';
import {
  Box,
  Container,
  PushContainer,
  PushTitle,
  PushToggleSwitch,
  SecessionButton,
  Title,
} from './SettingScreen.style';
import { userState } from '../../../../states';
import { updatePushConsent } from '../../../../services/api/authService';
import { LogoutButton } from '../MyInfoScreen/MyInfoScreen.style';
import { useDialog } from '../../../../states/context/DialogContext';

const SettingScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isAgree, setIsAgree] = useState<boolean>(!!user?.pushConsent);
  const { bottom } = useSafeAreaInsets();
  const { showConfirm } = useDialog();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onSwitchPush = () => {
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

  const onPressSecession = async () => {
    try {
      await showConfirm({ alertMessage: '정말로 탈퇴하시겠습니까?', confirmText: '탈퇴하기' });
    } catch (e) {}
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
              onValueChange={onSwitchPush}
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
        <SecessionButton bottom={bottom} onPress={onPressSecession}>
          <Medium16 color={GREY600}>서비스 떠나기</Medium16>
        </SecessionButton>
      </Container>
    </Screen>
  );
};

export default SettingScreen;
