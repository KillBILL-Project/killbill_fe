import React from 'react';
import { Medium14 } from '../Typography/Typography';
import { WHITE } from '../../constants/colors';
import { Container, MessageContainer } from './Toast.style';
import BaseIcon from '../Icon/BaseIcon';
import toastErrorIcon from '../../assets/icon/toast_error.png';
import toastInfoIcon from '../../assets/icon/toast_info.png';
import Spacer from '../Spacer/Spacer';
import { ToastProps } from '../../types/common';

const Toast = ({ message = [], isFailed = false }: ToastProps) => {
  return (
    <Container isFailed={isFailed}>
      <BaseIcon size="15px" image={isFailed ? toastErrorIcon : toastInfoIcon} />
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
