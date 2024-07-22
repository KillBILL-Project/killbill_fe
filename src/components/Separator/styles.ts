import styled from 'styled-components/native';
import { GREY100 } from '@constants/colors';
import { px, ratioPx } from '@utils/platform';

interface SeparatorProps {
  color?: string;
  length: number | string;
  thickness?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Separator = styled.View<SeparatorProps>`
  background-color: ${({ color }) => color ?? GREY100};
`;

export const SeparatorHorizontal = styled(Separator)`
  width: ${({ length }) => (typeof length === 'number' ? ratioPx(length) : length)};
  height: ${({ thickness }) => (thickness ? ratioPx(thickness) : px(1))};
  margin-top: ${({ margin, marginTop }) => ratioPx(marginTop ?? margin ?? 0)};
  margin-bottom: ${({ margin, marginBottom }) => ratioPx(marginBottom ?? margin ?? 0)};
  margin-left: ${({ margin, marginLeft }) => ratioPx(marginLeft ?? margin ?? 0)};
  margin-right: ${({ margin, marginRight }) => ratioPx(marginRight ?? margin ?? 0)};
  align-self: center;
`;

export const SeparatorVertical = styled(Separator)`
  width: ${({ thickness }) => (thickness ? ratioPx(thickness) : px(1))};
  height: ${({ length }) => (typeof length === 'number' ? ratioPx(length) : length)};
  margin-top: ${({ margin, marginTop }) => ratioPx(marginTop ?? margin ?? 0)};
  margin-bottom: ${({ margin, marginBottom }) => ratioPx(marginBottom ?? margin ?? 0)};
  margin-left: ${({ margin, marginLeft }) => ratioPx(marginLeft ?? margin ?? 0)};
  margin-right: ${({ margin, marginRight }) => ratioPx(marginRight ?? margin ?? 0)};
  justify-self: center;
`;
