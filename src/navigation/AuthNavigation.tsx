import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';
import AuthDetailScreen from '@screens/auth/AuthDetail';
import ForgotPasswordScreen from '@screens/auth/ForgotPassword';
import WebViewScreen from '@screens/home/WebView';
import { AuthStackParamList } from '@type/navigation';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AuthDetail" component={AuthDetailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
