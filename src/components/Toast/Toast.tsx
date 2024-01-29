import React from 'react';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { PanResponderInstance } from 'react-native';
import { Medium14 } from '../Typography';
import { WHITE } from '../../constants/colors';
import { Container, MessageContainer } from './Toast.style';
import BaseIcon from '../Icon/BaseIcon';
import toastErrorIcon from '../../assets/icon/toast_error.png';
import toastInfoIcon from '../../assets/icon/toast_info.png';
import Spacer from '../Spacer/Spacer';
import { ToastProps } from '../../types/common';

interface ToastPropsWithStyle extends ToastProps {
  style: StyleProp<ViewStyle>;
  panResponder: PanResponderInstance;
}

const Toast = ({ message = [], isFailed = false, style, panResponder }: ToastPropsWithStyle) => {
  return (
    <Container isFailed={isFailed} style={style} {...panResponder.panHandlers}>
      <BaseIcon size={15} icon={isFailed ? toastErrorIcon : toastInfoIcon} />
      <Spacer width={10} />
      <MessageContainer>
        {typeof message === 'string' ? (
          <Medium14 color={WHITE}>{message}</Medium14>
        ) : (
          message.map((value, index) => (
            <Medium14 key={value.length + index.toString()} color={WHITE}>
              {value}
            </Medium14>
          ))
        )}
      </MessageContainer>
    </Container>
  );
};

export default Toast;
