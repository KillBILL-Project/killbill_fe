import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../domains/home/screens/HomeScreen';
import CustomTabBar from './components/CustomTabBar';
import ReportScreen from '../domains/home/screens/ReportScreen';
import ReportDetailScreen from '../domains/home/screens/ReportDetailScreen';

const Tab = createBottomTabNavigator();
const ReportStack = createStackNavigator();

const ReportNavigation = () => {
  return (
    <ReportStack.Navigator screenOptions={{ headerShown: false }}>
      <ReportStack.Screen name="ReportScreen" component={ReportScreen} />
      <ReportStack.Screen name="ReportDetail" component={ReportDetailScreen} />
    </ReportStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <Tab.Navigator tabBar={CustomTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen name="Location" component={HomeScreen} options={{ title: '쓰레기위치' }} />
      <Tab.Screen name="Report" component={ReportNavigation} options={{ title: '리포트' }} />
      <Tab.Screen name="MyPage" component={HomeScreen} options={{ title: '마이페이지' }} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
