import styled from 'styled-components/native';
import { WHITE } from '../../constants/colors';
import { px } from '../../utils/platform';
import { HEADER_HEIGHT } from '../../constants/constants';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor ?? WHITE};
`;

export const InnerContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: ${px(HEADER_HEIGHT)};
  flex-direction: row;
`;

export const Left = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Center = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Body = styled.View`
  flex: 1;
`;
