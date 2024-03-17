import React, { ReactElement, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import useInterceptor from '../../hooks/useInterceptor';
import { createLoginLog } from '../../services/api/authService';
import { tokenState } from '../../states';
import useAuth from '../../hooks/useAuth';
import { setFcmToken } from '../../utils/push-notification';
import { setAlertManager } from '../../states/alert/AlertManager';
import { useDialog } from '../../states/context/DialogContext';

const AppFrame: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { showAlert, hideAlert } = useDialog();
  const accessToken = useRecoilValue(tokenState);
  const { getUser } = useAuth();

  /* Axios 인터셉터 추가  */
  useInterceptor();

  /* 안드로이드 기본 네비게이션 바 컬러 변경 */
  changeNavigationBarColor('transparent', true);

  /* 앱 로그인(실행) 시 로그, fcmToken 저장할 함수  */
  const initializeApp = async () => {
    try {
      await setFcmToken(); // 알림 권한 확인 후 fcm 토큰 발급 후 DB 업데이트
      await getUser(); // 유저정보 조회하여 atom 에 저장
      await createLoginLog();
    } catch (error) {
      // TODO
    }
  };

  useEffect(() => {
    if (!accessToken) return;
    initializeApp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  useEffect(() => {
    setAlertManager(showAlert, hideAlert);
  }, [hideAlert, showAlert]);

  return children;
};

export default AppFrame;
