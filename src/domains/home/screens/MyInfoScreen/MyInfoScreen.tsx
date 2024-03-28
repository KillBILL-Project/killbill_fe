import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { includes } from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { userState } from '../../../../states';
import Screen from '../../../../components/Screen/Screen';
import { Bold18, Medium16, Regular16 } from '../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../constants/colors';
import Separator from '../../../../components/Separator/Separator';
import { width } from '../../../../utils/platform';
import MenuButton from '../components/MenuButton/MenuButton';
import { MenuType } from '../../../../types/common';
import { MyPageParamList } from '../../../../types/navigation';
import { Box, Container, LogoutButton, Title } from './MyInfoScreen.style';
import UseAuth from '../../../../hooks/useAuth';
import { ReportDetailParams } from '../../../../types/report';

const menuList: MenuType<MyPageParamList>[] = [
  {
    name: '비밀번호 재설정',
    route: 'ResetPassword',
    loginType: ['EMAIL'],
  },
];

const MyInfoScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();
  const [user] = useRecoilState(userState);
  const { bottom } = useSafeAreaInsets();
  const { logout } = UseAuth();

  const onPressMenu = (route: keyof MyPageParamList, param?: ReportDetailParams) => {
    if (route !== 'ReportDetail') {
      navigate(route);
      return;
    }
    if (param) navigate(route, param);
  };

  const onPressLogout = async () => {
    await logout();
  };
  return (
    <Screen title="내정보">
      <Container>
        <Title>
          <Bold18 color={BLACK}>로그인 정보</Bold18>
        </Title>
        <Box>
          <Regular16 color={BLACK}>{user?.email ? user.email : '이메일 정보 없음'}</Regular16>
        </Box>
        <Separator horizontal length={width} thickness={8} margin={24} />
        {menuList.map(menu =>
          !menu.loginType || includes(menu.loginType, user?.loginType) ? (
            <MenuButton key={menu.name} title={menu.name} onPress={() => onPressMenu(menu.route)} />
          ) : null,
        )}
        <LogoutButton bottom={bottom} onPress={onPressLogout}>
          <Medium16 color={GREY600}>로그아웃</Medium16>
        </LogoutButton>
      </Container>
    </Screen>
  );
};

export default MyInfoScreen;
