import React, { ReactElement, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SplashScreen from 'react-native-splash-screen';
import { MobileAds } from 'react-native-google-mobile-ads';
import { createLoginLog } from '@services/api/authService';
import { requestUserPermission, setFcmToken } from '@utils/push-notification';
import { loadRefreshToken } from '@services/storage/encryptedStorage';
import GlobalVariableManager from '@services/utils/GlobalVariableManager';
import useInterceptor from '@hooks/useInterceptor';
import useAuth from '@hooks/useAuth';
import useReissueMutation from '@hooks/mutation/auth/useReissueMutation';
import { tokenState } from '@states/auth';

const AppFrame: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { mutate: reissueMutate } = useReissueMutation();
  const accessToken = useRecoilValue(tokenState);
  const { getUser } = useAuth();

  /* Axios 인터셉터 추가  */
  useInterceptor();

  /* 안드로이드 기본 네비게이션 바 컬러 변경 */
  changeNavigationBarColor('transparent', true);
  requestUserPermission();

  /* 앱 로그인(실행) 시 로그, fcmToken 저장할 함수  */
  const initializeApp = async () => {
    try {
      await Promise.all([setFcmToken(), getUser(), createLoginLog()]);
    } catch (error) {}
  };

  useEffect(() => {
    if (!accessToken) {
      loadRefreshToken().then(refreshToken => {
        if (!refreshToken) {
          SplashScreen.hide();
          return;
        }
        reissueMutate();
      });
    }

    if (accessToken && !GlobalVariableManager.initialized) {
      initializeApp().finally(() => {
        GlobalVariableManager.setInitialized(true);
        SplashScreen.hide();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  useEffect(() => {
    MobileAds()
      .initialize()
      .then(adapterStatuses => {});
  });

  return children;
};

export default AppFrame;
