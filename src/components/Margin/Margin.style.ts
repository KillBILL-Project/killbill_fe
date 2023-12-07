import styled from 'styled-components/native';

export const MarginStyled = styled.View<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;
