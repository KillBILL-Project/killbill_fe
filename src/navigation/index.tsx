import React from 'react';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { WHITE } from '@constants/colors';
import { tokenState } from '@states/auth';
import AppFrame from '@components/common/AppFrame';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: WHITE },
};

const Navigation = () => {
  const accessToken = useRecoilValue(tokenState);

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppFrame>{accessToken ? <HomeNavigation /> : <AuthNavigation />}</AppFrame>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;
