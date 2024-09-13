import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';
import Animated from 'react-native-reanimated';

interface ContainerProps {
  switchWidth: number;
  switchHeight: number;
  switchColor: string;
}

interface CircleProps {
  knobSize: number;
  knobMargin?: number;
  knobColor: string;
}

export const SwitchTrack = styled.Pressable<ContainerProps>`
  width: ${({ switchWidth }) => ratioPx(switchWidth)};
  height: ${({ switchHeight }) => ratioPx(switchHeight)};
  border-radius: ${({ switchHeight }) => ratioPx(switchHeight / 2)};
  background-color: ${({ switchColor }) => switchColor};
  justify-content: center;
`;

export const Knob = styled(Animated.View)<CircleProps>`
  width: ${({ knobSize, knobMargin = 0 }) => ratioPx(knobSize - knobMargin * 2)};
  height: ${({ knobSize, knobMargin = 0 }) => ratioPx(knobSize - knobMargin * 2)};
  margin: ${({ knobSize, knobMargin = 0 }) => ratioPx(knobMargin)};
  border-radius: ${({ knobSize }) => ratioPx(knobSize / 2)};
  background-color: ${({ knobColor }) => knobColor};
`;
