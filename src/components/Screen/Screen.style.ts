import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WHITE } from '../../constants/colors';
import { px } from '../../utils/platform';
import { HEADER_HEIGHT } from '../../constants/constants';

interface ContainerProps {
  backgroundColor?: string;
}

interface HeaderProps {
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor ?? WHITE};
`;

export const HeaderContainer = styled(SafeAreaView)<HeaderProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
`;

export const Header = styled.View`
  height: ${px(HEADER_HEIGHT)};
  flex-direction: row;
  align-items: center;
`;

export const Left = styled.View`
  position: absolute;
  left: 0;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const Body = styled(SafeAreaView)`
  flex: 1;
`;
