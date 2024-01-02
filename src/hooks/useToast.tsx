import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';
import Toast from '../components/Toast/Toast';
import { ToastProps } from '../types/common';

const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [props, setProps] = useState<ToastProps>({
    message: '',
    isFailed: false,
  });

  const toastAnim = useRef(new Animated.Value(-130)).current;

  const resetToast = useCallback(() => {
    toastAnim.resetAnimation();
  }, [toastAnim]);

  const hideToast = useCallback(
    (delay?: number) => {
      Animated.timing(toastAnim, {
        toValue: -130,
        easing: Easing.out(Easing.linear),
        duration: 200,
        delay: delay ?? 1000,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) setIsVisible(false);
      });
    },
    [toastAnim],
  );

  const showToast = useCallback(
    ({ isFailed, message }: ToastProps) => {
      if (isVisible) {
        setIsVisible(false);
        resetToast();
      }

      setProps({ message, isFailed });
      setIsVisible(true);

      Animated.timing(toastAnim, {
        toValue: 0,
        easing: Easing.out(Easing.circle),
        duration: 200,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) hideToast();
      });
    },
    [hideToast, isVisible, resetToast, toastAnim],
  );

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy < 0) hideToast(0);
    },
  });

  const ToastComponent = useMemo(() => {
    return isVisible ? (
      <Toast
        isFailed={props.isFailed}
        message={props.message}
        style={{
          transform: [
            {
              translateY: toastAnim,
            },
          ],
        }}
        panResponder={panResponder}
      />
    ) : null;
  }, [isVisible, panResponder, props.isFailed, props.message, toastAnim]);

  return { showToast, ToastComponent };
};

export default useToast;
