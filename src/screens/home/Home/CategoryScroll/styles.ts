import styled from 'styled-components/native';
import { px, ratioPx, width } from '@utils/platform';
import { SELECTED_CIRCLE_SIZE } from '@screens/home/Home/constant';

export const Container = styled.View`
  height: ${px(SELECTED_CIRCLE_SIZE)};
  justify-content: center;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const halfCircle = SELECTED_CIRCLE_SIZE / 2;
const halfWidth = width / 2;

export const Row = styled.View`
  gap: ${ratioPx(8)};
  flex-direction: row;
  align-items: center;
  left: ${px(halfWidth - halfCircle)};
`;
