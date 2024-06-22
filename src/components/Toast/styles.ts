import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { ERROR, INFO } from '@constants/colors';
import { AUTH_BORDER_RADIUS, TOAST_WIDTH } from '@constants/constants';
import { px, ratioPx } from '@utils/platform';

interface ContainerProps {
  isFailed: boolean;
}

export const Container = styled(Animated.View)<ContainerProps>`
  position: absolute;
  align-self: center;
  height: ${ratioPx(56)};
  width: ${px(TOAST_WIDTH)};
  top: ${ratioPx(40)};
  z-index: 1002;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  align-items: center;
  flex-direction: row;
  padding-left: ${ratioPx(20)};
  background-color: ${({ isFailed }) => (isFailed ? ERROR : INFO)};
`;

export const MessageContainer = styled.View``;
