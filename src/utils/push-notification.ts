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
  try {
    const fcmToken = await getFcmToken();
    updateFcmToken({ fcmToken });
  } catch (e) {
    console.error('firebase token error', e);
  }
};
