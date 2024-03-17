import messaging from '@react-native-firebase/messaging';
import { updateFcmToken } from '../services/api/authService';

export const getFcmToken = async () => {
  return messaging().getToken();
};

/**
 * @return true: 알림 권한 ON
 */
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

export const setFcmToken = async () => {
  if (await requestUserPermission()) {
    const fcmToken = await getFcmToken();
    await updateFcmToken({ fcmToken });
  }
};
