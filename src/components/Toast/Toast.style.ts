import styled from 'styled-components/native';
import { ERROR, INFO } from '../../constants/colors';

interface ContainerProps {
  isFailed: boolean;
}

export const Container = styled.View<ContainerProps>`
  position: absolute;
  align-self: center;
  height: 56px;
  width: 90%;
  top: 50px;
  z-index: 100;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  background-color: ${({ isFailed }) => (isFailed ? ERROR : INFO)};
`;

export const MessageContainer = styled.View``;
