import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';

export const Icon = styled.Image<{ size: number }>`
  width: ${({ size }) => ratioPx(size)};
  height: ${({ size }) => ratioPx(size)};
`;
