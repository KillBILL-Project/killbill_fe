import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { tokenState } from '../states';
import AppFrame from '../components/common/AppFrame';
import useAuth from '../hooks/useAuth';

const Navigation = () => {
  const accessToken = useRecoilValue(tokenState);
  const { getUser } = useAuth();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  useEffect(() => {
    if (!accessToken) return;
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <NavigationContainer theme={MyTheme}>
      <AppFrame>{accessToken ? <HomeNavigation /> : <AuthNavigation />}</AppFrame>
    </NavigationContainer>
  );
};

export default Navigation;
