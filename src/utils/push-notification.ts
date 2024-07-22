import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import { checkNotifications } from 'react-native-permissions';
import { updateFcmToken } from '@services/api/authService';
import { isIOS } from './platform';

export const getFcmToken = async () => {
  return messaging().getToken();
};

/**
 * @return true: 알림 권한 ON
 */
export const requestUserPermission = async () => {
  if (isIOS) {
    const authStatus = await messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  }

  /* 'granted' | 'denied' | 'never_ask_again' */
  const permissionStatus = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );

  return permissionStatus === 'granted';
};

export const checkNotification = async () => {
  const { status } = await checkNotifications();
  return status === 'granted';
};

export const setFcmToken = async () => {
  try {
    const fcmToken = await getFcmToken();
    updateFcmToken({ fcmToken });
  } catch (e) {
    console.error('firebase token error', e);
  }
};
