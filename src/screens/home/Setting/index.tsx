import React from 'react';
import { useRecoilState } from 'recoil';
import { toUpper } from 'lodash';
import { BLACK, GREY500, GREY600, WHITE } from '@constants/colors';
import { Bold18, Medium16, Regular16 } from '@components/Typography';
import { width } from '@utils/platform';
import { userState } from '@states/auth';
import { requestWithdrawal } from '@services/api/authService';
import { useDialog } from '@states/context/DialogContext';
import UseAuth from '@hooks/useAuth';
import useNotification from '@hooks/useNotification';
import Separator from '@components/Separator';
import Screen from '@components/Screen';
import Switch from '@components/Switch';
import {
  Box,
  Container,
  PushContainer,
  PushTitle,
  PushToggleSwitch,
  SecessionButton,
  Title,
} from './styles';

const SettingScreen = () => {
  const { checkPermission, pushConsent } = useNotification();
  const [user, setUser] = useRecoilState(userState);
  const { showConfirm } = useDialog();
  const { clearTokens } = UseAuth();

  const onSwitchPress = () => {
    checkPermission();
  };

  const onPressSecession = async () => {
    try {
      await showConfirm({ alertMessage: '정말로 탈퇴하시겠습니까?', confirmText: '탈퇴하기' });
      await requestWithdrawal();
      setUser(null);
      await clearTokens();
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
              value={pushConsent}
              onValueChange={onSwitchPress}
              width={46}
              height={24}
              knobMargin={2.5}
              knobColor={WHITE}
              activeColor={BLACK}
              inactiveColor={GREY500}
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
        <SecessionButton onPress={onPressSecession}>
          <Medium16 color={GREY600}>서비스 떠나기</Medium16>
        </SecessionButton>
      </Container>
    </Screen>
  );
};

export default SettingScreen;
