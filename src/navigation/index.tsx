import React from 'react';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { tokenState } from '../states';
import AppFrame from '../components/common/AppFrame';
import { WHITE } from '../constants/colors';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: WHITE },
};

const Navigation = () => {
  const accessToken = useRecoilValue(tokenState);

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <AppFrame>{accessToken ? <HomeNavigation /> : <AuthNavigation />}</AppFrame>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;
