import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../domains/home/screens/HomeScreen';
import CustomTabBar from './components/CustomTabBar';
import ReportScreen from '../domains/home/screens/ReportScreen';
import ReportDetailScreen from '../domains/home/screens/ReportDetailScreen';
import MyPageScreen from '../domains/home/screens/MyPageScreen';
import FaqScreen from '../domains/home/screens/FaqScreen';
import ComplimentCardScreen from '../domains/home/screens/ComplimentCardScreen';
import SettingScreen from '../domains/home/screens/SettingScreen';
import UserGuideScreen from '../domains/home/screens/UserGuideScreen';
import MyInfoScreen from '../domains/home/screens/MyInfoScreen';
import MyHistoryScreen from '../domains/home/screens/MyHistoryScreen';
import AlarmSettingScreen from '../domains/home/screens/AlarmSettingScreen';
import NotificationScreen from '../domains/home/screens/NotificationScreen';
import ResetPasswordScreen from '../domains/auth/screens/ResetPasswordScreen';
import { HomeStackParamList, HomeTabParamList } from '../types/navigation';
import TrashLocationScreen from '../domains/home/screens/TrashLocationScreen';
import AlarmListScreen from '../domains/home/screens/AlarmListScreen';
import EmptyTrashScreen from '../domains/home/screens/EmptyTrashScreen';
import UserGuideDetailScreen from '../domains/home/screens/UserGuideDetailScreen';
import WebViewScreen from '../domains/home/screens/WebViewScreen';
import ComplimentDetailScreen from '../domains/home/screens/ComplimentDetailScreen';

const Tab = createBottomTabNavigator<HomeTabParamList>();
const Stack = createStackNavigator<HomeStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={CustomTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen
        name="Location"
        component={TrashLocationScreen}
        options={{ title: '쓰레기위치' }}
      />
      <Tab.Screen name="Report" component={ReportScreen} options={{ title: '리포트' }} />
      <Tab.Screen name="MyPage" component={MyPageScreen} options={{ title: '마이페이지' }} />
    </Tab.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="ComplimentCard" component={ComplimentCardScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="UserGuide" component={UserGuideScreen} />
      <Stack.Screen name="UserGuideDetail" component={UserGuideDetailScreen} />
      <Stack.Screen name="MyInfo" component={MyInfoScreen} />
      <Stack.Screen name="MyHistory" component={MyHistoryScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="AlarmList" component={AlarmListScreen} />
      <Stack.Screen name="AlarmSetting" component={AlarmSettingScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="EmptyTrash" component={EmptyTrashScreen} />
      <Stack.Screen name="CardDetail" component={ComplimentDetailScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
