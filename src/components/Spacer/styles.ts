import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';

interface SpacerViewProps {
  width?: number;
  height?: number;
}

export const SpacerView = styled.View<SpacerViewProps>`
  width: ${({ width }) => (width ? ratioPx(width) : 0)};
  height: ${({ height }) => (height ? ratioPx(height) : 0)};
`;
