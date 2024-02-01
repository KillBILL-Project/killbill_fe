import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Medium14 } from '../Typography';
import { WHITE } from '../../constants/colors';
import { Container, MessageContainer } from './Toast.style';
import BaseIcon from '../Icon/BaseIcon';
import Spacer from '../Spacer/Spacer';
import { isFailedState, isShowToastState, toastMessageState } from '../../states';

import toastErrorIcon from '../../assets/icon/toast_error.png';
import toastInfoIcon from '../../assets/icon/toast_info.png';

const Toast = () => {
  const setIsShowToast = useSetRecoilState(isShowToastState);
  const toastMessage = useRecoilValue(toastMessageState);
  const [message, setMessage] = useState('');
  const isFailed = useRecoilValue(isFailedState);

  const toastAnim = useRef(new Animated.Value(-130)).current;

  const hideToast = useCallback(
    (delay?: number) => {
      Animated.timing(toastAnim, {
        toValue: -130,
        easing: Easing.out(Easing.linear),
        duration: 150,
        delay: delay ?? 1000,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) setIsShowToast(false);
      });
    },
    [setIsShowToast, toastAnim],
  );

  const resetToast = useCallback(() => toastAnim.resetAnimation(), [toastAnim]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy < 0) hideToast(0);
    },
  });

  useEffect(() => {
    setMessage(toastMessage);

    Animated.timing(toastAnim, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) hideToast();
    });
    return () => resetToast();
  }, [hideToast, resetToast, toastAnim, toastMessage]);

  return (
    <Container
      isFailed={isFailed}
      style={{
        transform: [
          {
            translateY: toastAnim,
          },
        ],
      }}
      {...panResponder.panHandlers}
    >
      <BaseIcon size={15} icon={isFailed ? toastErrorIcon : toastInfoIcon} />
      <Spacer width={10} />
      <MessageContainer>
        <Medium14 color={WHITE}>{message}</Medium14>
      </MessageContainer>
    </Container>
  );
};

export default Toast;
