import styled from 'styled-components/native';
import { ratioPx } from '../../utils/platform';

export const Container = styled.View<{ size: number }>`
  width: ${({ size }) => ratioPx(size)};
  height: ${({ size }) => ratioPx(size)};
  justify-content: center;
  align-items: center;
`;
