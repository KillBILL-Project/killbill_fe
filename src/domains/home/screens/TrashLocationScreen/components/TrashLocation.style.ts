import styled from 'styled-components/native';
import { ratioPx } from '../../../../../utils/platform';
import { BTN_BG_LIGHT, GREY700 } from '../../../../../constants/colors';
import { Medium14, Semibold12, Semibold18 } from '../../../../../components/Typography';

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

export const MapWrapper = styled.TouchableOpacity`
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

export const TrashCanCountWrapper = styled.View`
  padding-top: 5px;
  width: 100%;
  align-items: center;
`;
export const TrashCanCount = styled.Text`
  font-size: ${ratioPx(18)};
  font-weight: 700;
  color: ${GREY700};
`;

export const TrashCanListWrapper = styled.View`
  padding-left: ${ratioPx(24)};
  padding-right: ${ratioPx(24)};
`;

export const TrashCanLocationWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${ratioPx(20)};
  padding-bottom: ${ratioPx(20)};
`;
export const TrashCanLocationText = styled.Text`
  color: ${GREY700};
  font-size: ${ratioPx(16)};
  font-weight: 600;
`;

export const TrashCanDetailWrapper = styled.View`
  padding: ${ratioPx(20)};
`;

export const TrashCanAddress = styled(Semibold18)``;

export const PlaceNameWrapper = styled.View`
  flex-direction: row;
  padding-top: ${ratioPx(7)};
`;

export const TrashImage = styled.Image`
  margin-right: ${ratioPx(4)};
  background-color: ${BTN_BG_LIGHT};
`;

export const TrashCanPlaceName = styled(Medium14)``;

export const CopyTextButton = styled.TouchableOpacity`
  padding-top: ${ratioPx(2)};
  justify-content: center;
  align-items: center;
  padding-left: ${ratioPx(12)};
`;

export const CopyText = styled(Semibold12)``;
