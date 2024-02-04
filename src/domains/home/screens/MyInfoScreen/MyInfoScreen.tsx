import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import _ from 'lodash';
import Screen from '../../../../components/Screen/Screen';
import { Bold18, Regular16 } from '../../../../components/Typography';
import { BLACK } from '../../../../constants/colors';
import Separator from '../../../../components/Separator/Separator';
import { width } from '../../../../utils/platform';
import MenuButton from '../components/MenuButton/MenuButton';
import { MenuType } from '../../../../types/common';
import { MyPageParamList } from '../../../../types/navigation';
import { Box, Container, Title } from './MyInfoScreen.style';
import { userState } from '../../../../states';

const menuList: MenuType<MyPageParamList>[] = [
  {
    name: '비밀번호 재설정',
    route: 'ResetPassword',
    loginType: ['EMAIL'],
  },
];

const MyInfoScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();
  const user = useRecoilValue(userState);
  const onPressMenu = (route: keyof MyPageParamList) => {
    navigate(route);
  };
  return (
    <Screen title="내정보">
      <Container>
        <Title>
          <Bold18 color={BLACK}>로그인 정보</Bold18>
        </Title>
        <Box>
          <Regular16 color={BLACK}>{user?.email}</Regular16>
        </Box>
        <Separator horizontal length={width} thickness={8} margin={24} />
        {menuList.map(menu =>
          !menu.loginType || _.includes(menu.loginType, user?.loginType) ? (
            <MenuButton key={menu.name} title={menu.name} onPress={() => onPressMenu(menu.route)} />
          ) : null,
        )}
      </Container>
    </Screen>
  );
};

export default MyInfoScreen;
