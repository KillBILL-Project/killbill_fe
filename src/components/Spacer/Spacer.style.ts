import styled from 'styled-components/native';

interface SpacerViewProps {
  width?: number;
  height?: number;
}

export const SpacerView = styled.View<SpacerViewProps>`
  width: ${({ width }) => (width ? `${width}px` : 0)};
  height: ${({ height }) => (height ? `${height}px` : 0)};
`;
