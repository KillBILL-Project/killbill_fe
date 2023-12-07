import styled from 'styled-components/native';

export const IconStyled = styled.Image<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
