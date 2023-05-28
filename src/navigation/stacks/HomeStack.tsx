import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@components/home/HomeScreen';

const HomeStack = () => {
  type RootStackParamList = {
    Home: undefined;
  };

  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
