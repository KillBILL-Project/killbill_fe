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
  position: relative;
  flex: 15;
`;

export const TrashTypeButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  height: ${ratioPx(40)};
  padding: ${ratioPx(6)} ${ratioPx(16)};
  border-width: 1px;
  background-color: ${props => (props.isSelected ? '#AFFC41' : '#F0F1F4')};
  border-color: ${props => (props.isSelected ? '#AFFC41' : '#F0F1F4')};
  border-radius: ${ratioPx(50)};
  align-items: center;
  justify-content: center;
  margin: ${ratioPx(2)};
`;

export const TrashTypeText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 600;
  color: #241023;
  line-height: 21px;
`;
export const TrashTypeListWrapper = styled.ScrollView`
  padding: 0 ${ratioPx(12)};
  flex: 2;
`;
