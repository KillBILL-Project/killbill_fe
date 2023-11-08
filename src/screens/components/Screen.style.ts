import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../common/colors';

export const Container = styled.SafeAreaView<{ backgroundColor?: string }>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || WHITE};
`;

export const Header = styled.View`
  height: 48px;
  flex-direction: row;
`;

export const Left = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px;
  justify-content: center;
`;

export const BackButtonIcon = styled.Image`
  width: 25px;
  height: 25px;
  transform: rotate(90deg);
`;

export const Center = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  flex: 1;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
`;

export const Body = styled.View`
  flex: 1;
`;
