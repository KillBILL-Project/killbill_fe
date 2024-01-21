import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Screen from '../../../../components/Screen/Screen';
import Spacer from '../../../../components/Spacer/Spacer';
import TopMenuButton from './components/TopMenuButton/TopMenuButton';
import WideButton from './components/WideButton/WideButton';
import MenuButton from '../components/MenuButton/MenuButton';
import { Container, MenuButtonContainer, ThreeButtonContainer } from './MyPageScreen.style';
import { MyPageParamList } from '../../../../types/navigation';
import checkedIcon from '../../../../assets/icon/checked.png';
import notification from '../../../../assets/icon/notification.png';
import Separator from '../../../../components/Separator/Separator';
import { width } from '../../../../utils/platform';
import { MenuType } from '../../../../types/common';

// TODO: 아이콘 추가

const topMenuList: MenuType<MyPageParamList>[] = [
  {
    name: '알림 설정',
    route: 'NotifySetting',
  },
  {
    name: '내 히스토리',
    route: 'MyHistory',
  },
  {
    name: '이용가이드',
    route: 'UserGuide',
  },
];

const menuList: MenuType<MyPageParamList>[] = [
  {
    name: '칭찬카드',
    route: 'PraiseCard',
  },
  {
    name: '내정보',
    route: 'MyInfo',
  },
  {
    name: '설정',
    route: 'Setting',
  },
  {
    name: '이용가이드',
    route: 'UserGuide',
  },
  {
    name: '자주묻는질문',
    route: 'Faq',
  },
];

const MyPageScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();

  const onPressMenu = (route: keyof MyPageParamList) => {
    navigate(route);
  };

  const onPressNotification = () => {
    navigate('Notification');
  };

  const rightButtonProps = {
    icon: notification,
    margin: 24,
    padding: 24,
    height: 24,
    width: 24,
    onPress: onPressNotification,
  };

  return (
    <Screen title="더보기" isBackButtonShown={false} rightButtonProps={rightButtonProps}>
      <Container>
        <ThreeButtonContainer>
          {topMenuList.map(menu => (
            <TopMenuButton
              key={menu.route}
              title={menu.name}
              onPress={() => onPressMenu(menu.route)}
              icon={checkedIcon}
            />
          ))}
        </ThreeButtonContainer>
        <Spacer height={16} />
        <WideButton />
        <Separator horizontal length={width} thickness={8} margin={24} />
        <MenuButtonContainer>
          {menuList.map(menu => (
            <MenuButton key={menu.name} title={menu.name} onPress={() => onPressMenu(menu.route)} />
          ))}
        </MenuButtonContainer>
      </Container>
    </Screen>
  );
};

export default MyPageScreen;
