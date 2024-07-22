import styled from 'styled-components/native';
import { hRatio } from '@constants/userGuide';
import { WHITE } from '@constants/colors';
import { px, ratioPx } from '@utils/platform';

export const Container = styled.View<{ isFullWidth?: boolean; colorType?: string }>`
  width: 100%;
  height: ${px(hRatio * 540)};
  background-color: ${({ colorType }) => (colorType === 'type2' ? WHITE : '#01021b')};
  border-radius: ${px(hRatio * 15)};
  margin-bottom: ${px(hRatio * 56)};
  padding-top: ${({ isFullWidth }) => (isFullWidth ? 0 : px(hRatio * 24))};
  padding-bottom: ${({ isFullWidth }) => (isFullWidth ? 0 : px(hRatio * 24))};
  padding-left: ${({ isFullWidth }) => (isFullWidth ? 0 : ratioPx(20))};
  padding-right: ${({ isFullWidth }) => (isFullWidth ? 0 : ratioPx(20))};
`;
