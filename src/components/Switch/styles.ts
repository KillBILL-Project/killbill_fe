import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { ratioPx } from '@utils/platform';

interface ContainerProps {
  width: number;
  height: number;
  backgroundColor: string;
}

interface CircleProps {
  height: number;
  borderColor: string;
  borderWidth: number;
  backgroundColor: string;
}

export const Container = styled.Pressable<ContainerProps>`
  width: ${({ width }) => ratioPx(width)};
  height: ${({ height }) => ratioPx(height)};
  border-radius: ${({ height }) => ratioPx(height / 2)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  justify-content: center;
`;

export const Circle = styled(Animated.View)<CircleProps>`
  width: ${({ height }) => ratioPx(height)};
  height: ${({ height }) => ratioPx(height)};
  border-radius: ${({ height }) => ratioPx(height / 2)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-width: ${({ borderWidth }) => ratioPx(borderWidth)};
  border-color: ${({ borderColor }) => borderColor};
`;
