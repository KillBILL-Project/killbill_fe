import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { tokenState, userState } from '../states';
import AppFrame from '../components/common/AppFrame';
import { getUserInfo } from '../services/api/authService';

const Navigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  const accessToken = useRecoilValue(tokenState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!accessToken && !user) return;

    const getUser = async () => {
      const response = await getUserInfo();
      const userInfo = response.data.data;
      if (!userInfo) {
        // TODO: 유저정보가 없을리 없지만 없다면 로그인화면으로 보내야하나?
      }
      setUser({
        email: userInfo.email,
        country: userInfo.country,
        loginType: userInfo.loginType,
        pushConsent: userInfo.pushConsent,
      });
    };

    getUser();
  }, [accessToken, setUser, user]);
  return (
    <NavigationContainer theme={MyTheme}>
      <AppFrame>{accessToken ? <HomeNavigation /> : <AuthNavigation />}</AppFrame>
    </NavigationContainer>
  );
};

export default Navigation;
