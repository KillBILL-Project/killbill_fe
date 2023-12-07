import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../domains/home/screens/HomeScreen';

import homeIcon from '../assets/icon/home.png';
import homeIconFocused from '../assets/icon/home_focused.png';
import locationIcon from '../assets/icon/location.png';
import locationIconFocused from '../assets/icon/location_focused.png';
import reportIcon from '../assets/icon/report.png';
import reportIconFocused from '../assets/icon/report_focused.png';
import myPageIcon from '../assets/icon/mypage.png';
import myPageIconFocused from '../assets/icon/mypage_focused.png';
import BaseIcon from '../components/Icon/BaseIcon';

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

const Icon = ({ focused, color, size }: IconProps) => {
  const route = { name: 'Home' };

  const iconName = useMemo(() => {
    if (route.name === 'Home') {
      return focused ? homeIconFocused : homeIcon;
    }
    if (route.name === 'Location') {
      return focused ? locationIconFocused : locationIcon;
    }
    if (route.name === 'Report') {
      return focused ? reportIconFocused : reportIcon;
    }
    if (route.name === 'MyPage') {
      return focused ? myPageIconFocused : myPageIcon;
    }
    return homeIcon;
  }, [focused, route.name]);

  return <BaseIcon size="15px" image={iconName} />;
};

const HomeNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarStyle: { borderRadius: 15, borderColor: 'black' },
        tabBarLabelStyle: { fontSize: 15 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: () => Icon({ focused: true, color: '123', size: 123 }),
        }}
      />
      <Tab.Screen
        name="Location"
        component={HomeScreen}
        options={{ title: '쓰레기위치', tabBarIcon: Icon }}
      />
      <Tab.Screen
        name="Report"
        component={HomeScreen}
        options={{ title: '리포트', tabBarIcon: Icon }}
      />
      <Tab.Screen
        name="MyPage"
        component={HomeScreen}
        options={{ title: '마이페이지', tabBarIcon: Icon }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
