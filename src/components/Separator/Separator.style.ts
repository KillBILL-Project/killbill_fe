import styled from 'styled-components/native';
import { px, ratioPx } from '../../utils/platform';
import { GREY100 } from '../../constants/colors';

interface SeparatorProps {
  color?: string;
  length: number | string;
  thickness?: number;
  margin: number;
}

const Separator = styled.View<SeparatorProps>`
  background-color: ${({ color }) => color ?? GREY100};
`;

export const SeparatorHorizontal = styled(Separator)`
  width: ${({ length }) => (typeof length === 'number' ? ratioPx(length) : length)};
  height: ${({ thickness }) => (thickness ? ratioPx(thickness) : px(1))};
  margin-top: ${({ margin }) => ratioPx(margin)};
  margin-bottom: ${({ margin }) => ratioPx(margin)};
  align-self: center;
`;

export const SeparatorVertical = styled(Separator)`
  width: ${({ thickness }) => (thickness ? ratioPx(thickness) : px(1))};
  height: ${({ length }) => (typeof length === 'number' ? ratioPx(length) : length)};
  margin-left: ${({ margin }) => ratioPx(margin)};
  margin-right: ${({ margin }) => ratioPx(margin)};
  justify-self: center;
`;
