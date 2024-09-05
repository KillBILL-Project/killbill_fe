import styled from 'styled-components/native';
import { px } from '@utils/platform';
import { FIRST_CIRCLE_SIZE } from '@screens/home/Home/constant';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: ${px(FIRST_CIRCLE_SIZE)};
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
