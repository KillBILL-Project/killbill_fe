import { AppState } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { openSettings } from 'react-native-permissions';
import { updatePushConsent } from '@services/api/authService';
import { checkNotification } from '@utils/push-notification';
import { userState } from '@states/auth';
import UseAuth from './useAuth';

const useNotification = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const user = useRecoilValue(userState);
  const [pushConsent, setPushConsent] = useState(false);
  const { getUser } = UseAuth();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const update = useCallback(
    (state: boolean) => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(async () => {
        updatePushConsent({ pushConsent: state }).then(() => {
          getUser();
        });
      }, 500);
    },
    [pushConsent],
  );

  const setPermission = async () => {
    const permission = await checkNotification();
    setHasPermission(permission);
    setPushConsent(permission && !!user?.pushConsent);
  };

  const checkPermission = useCallback(() => {
    if (!hasPermission) openSettings();
    if (hasPermission) {
      setPushConsent(prevState => {
        update(!prevState);
        return !prevState;
      });
    }
  }, [hasPermission]);

  const onChangePermission = useCallback(async () => {
    const permission = await checkNotification();
    setHasPermission(prevState => {
      if (prevState === permission) return prevState;
      setHasPermission(permission);
      setPushConsent(permission);
      update(permission);
      return !prevState;
    });
  }, []);

  useEffect(() => {
    setPermission();

    const subscription = AppState.addEventListener('change', async state => {
      if (state === 'active') await onChangePermission();
    });

    return () => subscription.remove();
  }, []);

  return { pushConsent, checkPermission };
};

export default useNotification;
