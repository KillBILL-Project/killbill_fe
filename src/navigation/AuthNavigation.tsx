import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../domains/auth/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../domains/auth/screens/RegisterScreen';
import AuthDetailScreen from '../domains/auth/screens/AuthDetailScreen';
import ForgotPasswordScreen from '../domains/auth/screens/ForgotPasswordScreen';
import { AuthStackParamList } from '../types/navigation';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AuthDetail" component={AuthDetailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
