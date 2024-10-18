import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import notification from '@assets/icon/notification.png';
import alarmSetting from '@assets/icon/myPage/alarm_setting.png';
import myHistory from '@assets/icon/myPage/my_history.png';
import userGuide from '@assets/icon/myPage/user_guide.png';
import { HomeTabParamList, MyPageParamList } from '@type/navigation';
import { width } from '@utils/platform';
import { MenuType } from '@type/common';
import WideButton from '@screens/home/MyPage/WideButton';
import Screen from '@components/Screen';
import TopMenuButton from '@screens/home/MyPage/TopMenuButton';
import Separator from '@components/Separator';
import MenuButton from '@components/MenuButton';
import {
  BottomSection,
  Container,
  MenuButtonContainer,
  ThreeButtonContainer,
  TopSection,
} from './styles';

const topMenuList: MenuType<MyPageParamList>[] = [
  {
    icon: alarmSetting,
    name: '알림 설정',
    route: 'AlarmList',
  },
  {
    icon: myHistory,
    name: '탄소절감 기록',
    route: 'MyHistory',
  },
  {
    icon: userGuide,
    name: '분리수거 방법',
    route: 'UserGuide',
  },
];

const menuList: MenuType<MyPageParamList>[] = [
  {
    name: '리포트',
    route: 'Report',
  },
  {
    name: '칭찬카드',
    route: 'ComplimentCard',
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
    route: 'WebView',
  },
];

const MyPageScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<MyPageParamList>>();
  const tabNavigation = useNavigation<NavigationProp<HomeTabParamList>>();

  const onPressMenu = (route: keyof MyPageParamList) => {
    if (route === 'WebView') {
      navigate(route, {
        url: 'https://wwooss.notion.site/FAQ-980b6ce2ce7047c2922902aba31a4a6e?pvs=74',
        title: '자주묻는질문',
      });
      return;
    }
    navigate(route);
  };

  const onPressNotification = () => {
    navigate('Notification');
  };

  const onPressBanner = () => {
    tabNavigation.navigate('Location');
  };

  const rightButtonProps = {
    icon: notification,
    padding: 24,
    size: 24,
    onPress: onPressNotification,
  };

  return (
    <Screen title="더보기" isBackButtonShown={false} rightButtonProps={rightButtonProps}>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <TopSection>
          <ThreeButtonContainer>
            {topMenuList.map(menu => (
              <TopMenuButton
                key={menu.route}
                title={menu.name}
                onPress={() => onPressMenu(menu.route)}
                icon={menu.icon!}
              />
            ))}
          </ThreeButtonContainer>
          <WideButton onPress={onPressBanner} />
        </TopSection>
        <Separator horizontal length={width} thickness={8} />
        <BottomSection>
          <MenuButtonContainer>
            {menuList.map(menu => (
              <MenuButton
                key={menu.name}
                title={menu.name}
                onPress={() => onPressMenu(menu.route)}
              />
            ))}
          </MenuButtonContainer>
        </BottomSection>
      </Container>
    </Screen>
  );
};

export default MyPageScreen;
