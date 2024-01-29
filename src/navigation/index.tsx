import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { tokenState } from '../states';
import AppFrame from '../components/common/AppFrame';

const Navigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  const accessToken = useRecoilValue(tokenState);
  return (
    <NavigationContainer theme={MyTheme}>
      <AppFrame>{!accessToken ? <HomeNavigation /> : <AuthNavigation />}</AppFrame>
    </NavigationContainer>
  );
};

export default Navigation;
