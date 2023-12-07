import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { tokenAtom } from '../states';

const Navigation = () => {
  const accessToken = useRecoilValue(tokenAtom);
  return (
    <NavigationContainer>
      {accessToken ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
