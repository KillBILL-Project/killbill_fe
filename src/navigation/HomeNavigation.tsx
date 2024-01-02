import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../domains/home/screens/HomeScreen';
import CustomTabBar from './components/CustomTabBar';

const HomeNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={CustomTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen name="Location" component={HomeScreen} options={{ title: '쓰레기위치' }} />
      <Tab.Screen name="Report" component={HomeScreen} options={{ title: '리포트' }} />
      <Tab.Screen name="MyPage" component={HomeScreen} options={{ title: '마이페이지' }} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
