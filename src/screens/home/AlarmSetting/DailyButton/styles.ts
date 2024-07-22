import styled from 'styled-components/native';
import { GREY400, MAIN, WHITE } from '@constants/colors';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 32px;
  height: 32px;
  background-color: ${({ isSelected }) => (isSelected ? MAIN : WHITE)};
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? MAIN : GREY400)};
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;
