import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/home/Home';
import ReportScreen from '@screens/home/Report';
import ReportDetailScreen from '@screens/home/ReportDetail';
import MyPageScreen from '@screens/home/MyPage';
import FaqScreen from '@screens/home/Faq';
import ComplimentCardScreen from '@screens/home/ComplimentCard';
import SettingScreen from '@screens/home/Setting';
import UserGuideScreen from '@screens/home/UserGuide';
import MyInfoScreen from '@screens/home/MyInfo';
import MyHistoryScreen from '@screens/home/MyHistory';
import AlarmSettingScreen from '@screens/home/AlarmSetting';
import NotificationScreen from '@screens/home/Notification';
import ResetPasswordScreen from '@screens/auth/ResetPassword';
import TrashLocationScreen from '@screens/home/TrashLocation';
import AlarmListScreen from '@screens/home/AlarmList';
import EmptyTrashScreen from '@screens/home/EmptyTrash';
import UserGuideDetailScreen from '@screens/home/UserGuideDetail';
import WebViewScreen from '@screens/home/WebView';
import ComplimentDetailScreen from '@screens/home/ComplimentDetail';
import { HomeStackParamList, HomeTabParamList } from '@type/navigation';
import CustomTabBar from '@components/CumtomTabBar';

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
