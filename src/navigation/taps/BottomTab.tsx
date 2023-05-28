import React from 'react';
import HomeScreen from '@components/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
