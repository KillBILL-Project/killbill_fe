import React, { useCallback, useMemo, useRef, useState } from 'react';
import Toast from '../components/Toast/Toast';
import { ToastProps } from '../types/common';
import { sleep } from '../utils/common';

const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [props, setProps] = useState<ToastProps>({
    message: '',
    isFailed: false,
  });
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  const hideToast = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showToast = useCallback(async ({ isFailed, message }: ToastProps) => {
    setProps({ message, isFailed });
    if (toastTimeout.current) {
      setIsVisible(false);
      clearTimeout(toastTimeout.current);
    }

    await sleep(100);

    setIsVisible(true);
    toastTimeout.current = setTimeout(() => {
      setIsVisible(false);
      toastTimeout.current = null;
    }, 1500);
  }, []);

  const ToastComponent = useMemo(() => {
    return isVisible ? <Toast isFailed={props.isFailed} message={props.message} /> : null;
  }, [isVisible, props.isFailed, props.message]);

  return { showToast, ToastComponent };
};

export default useToast;
