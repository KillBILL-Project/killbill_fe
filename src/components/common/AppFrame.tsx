import React, { ReactElement, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import useInterceptor from '../../hooks/useInterceptor';
import { createLoginLog } from '../../services/api/authService';
import { tokenState } from '../../states';
import useAuth from '../../hooks/useAuth';
import { requestUserPermission, setFcmToken } from '../../utils/push-notification';

const AppFrame: React.FC<{ children: ReactElement }> = ({ children }) => {
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
    } catch (error) {
      // TODO
    }
  };

  useEffect(() => {
    if (!accessToken) return;
    initializeApp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return children;
};

export default AppFrame;
