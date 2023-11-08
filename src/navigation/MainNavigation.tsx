import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from './types';
import Login from '../screens/auth/Login/LoginScreen';
import Register from '../screens/auth/Register';
import AuthDetails from '../screens/auth/AuthDetails';
import ForgotPassword from '../screens/auth/ForgotPassword';
import ResetPassword from '../screens/auth/ResetPassword';
import Home from '../screens/Home';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AuthDetails" component={AuthDetails} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
