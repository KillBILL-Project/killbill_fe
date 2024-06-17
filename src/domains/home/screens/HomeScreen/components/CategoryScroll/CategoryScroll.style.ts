import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${ratioPx(159)};
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
