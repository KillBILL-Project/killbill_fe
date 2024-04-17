import styled from 'styled-components/native';
import { ratioPx } from '../../../../../utils/platform';

export const Wrapper = styled.View<{ top: number }>`
  position: absolute;
  top: ${props => ratioPx(props.top)};
  align-items: center;
  left: 0;
  right: 0;
`;
export const SearchPosition = styled.TouchableOpacity`
  padding: ${ratioPx(5)} ${ratioPx(10)};
  border-radius: 10px;
  width: ${ratioPx(120)};
  background-color: white;
`;

export const PositionWrapper = styled.View`
  position: absolute;
  top: ${ratioPx(30)};
  right: ${ratioPx(10)};
`;
export const MyPosition = styled.TouchableOpacity``;

export const SearchText = styled.Text`
  text-align: center;
`;

export const MapWrapper = styled.View`
  flex: 1;
  position: relative;
`;
