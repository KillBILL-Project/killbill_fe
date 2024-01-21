import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Screen from '../../../../components/Screen/Screen';
import { Bold18, Regular16 } from '../../../../components/Typography/Typography';
import { BLACK } from '../../../../constants/colors';
import Separator from '../../../../components/Separator/Separator';
import { width } from '../../../../utils/platform';
import MenuButton from '../components/MenuButton/MenuButton';
import { MenuType } from '../../../../types/common';
import { MyPageParamList } from '../../../../types/navigation';
import { Box, Container, Title } from './MyInfoScreen.style';

const menuList: MenuType<MyPageParamList>[] = [
  {
    name: '비밀번호 재설정',
    route: 'ResetPassword',
  },
];

const MyInfoScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();
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
          <Regular16 color={BLACK}>bumja@naver.com</Regular16>
        </Box>
        <Separator horizontal length={width} thickness={8} margin={24} />
        {menuList.map(menu => (
          <MenuButton key={menu.name} title={menu.name} onPress={() => onPressMenu(menu.route)} />
        ))}
      </Container>
    </Screen>
  );
};

export default MyInfoScreen;
