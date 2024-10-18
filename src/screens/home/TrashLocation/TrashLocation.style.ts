import styled from 'styled-components/native';
import {
  BLACK,
  BTN_BG_LIGHT,
  GREY500,
  GREY700,
  LINK,
  PRIMARY,
  TRACK_BG,
  WHITE,
} from '@constants/colors';
import { hRatioPx, ratioPx } from '@utils/platform';
import Animated from 'react-native-reanimated';

export const Wrapper = styled.View`
  position: absolute;
  align-items: center;
  top: ${hRatioPx(16)};
  left: 0;
  right: 0;
`;
export const SearchPosition = styled.TouchableOpacity`
  padding: ${hRatioPx(6)} ${hRatioPx(12)};
  border-radius: 30px;
  background-color: white;
`;

export const PositionWrapper = styled.View`
  position: absolute;
  top: ${hRatioPx(40)};
  right: ${hRatioPx(24)};
`;
export const MyPosition = styled.TouchableOpacity``;

export const SearchText = styled.Text`
  font-size: ${hRatioPx(14)};
  line-height: ${hRatioPx(20)};
  font-weight: 400;
`;

export const TrashTypeButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: ${ratioPx(6)} ${ratioPx(16)};
  border-width: 1px;
  background-color: ${props => (props.isSelected ? PRIMARY : WHITE)};
  border-color: ${props => (props.isSelected ? PRIMARY : TRACK_BG)};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const TrashTypeText = styled.Text<{ isSelected: boolean }>`
  font-size: ${ratioPx(14)};
  font-weight: 400;
  color: ${props => (props.isSelected ? BLACK : GREY700)};
  line-height: ${ratioPx(21)};
`;

export const TrashTypeListWrapper = styled.View`
  width: 100%;
  background-color: ${WHITE};
`;

export const TrashTypeScroll = styled.ScrollView``;

export const TrashCanListWrapper = styled.View`
  max-height: ${ratioPx(44 * 3)};
`;

export const TrashCanLocationWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const TrashCanLocationText = styled.Text`
  color: ${GREY700};
  font-size: ${ratioPx(16)};
  font-weight: 400;
  line-height: ${ratioPx(24)};
`;

export const TrashCanDetailWrapper = styled.View`
  padding: ${ratioPx(20)} ${ratioPx(24)};
`;

export const TrashCanAddressWrapper = styled.View`
  padding: ${ratioPx(8)} ${ratioPx(24)} ${ratioPx(0)};
  gap: ${ratioPx(4)};
`;

export const TrashCanLocationTitle = styled.Text`
  font-size: ${hRatioPx(18)};
  line-height: ${hRatioPx(27)};
  font-weight: 400;
  color: ${GREY700};
`;

export const TrashCanLocationAddressRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(12)};
`;

export const TrashImage = styled.Image`
  margin-right: ${ratioPx(4)};
  background-color: ${BTN_BG_LIGHT};
`;

export const TrashCanLocationAddressText = styled.Text`
  font-size: ${hRatioPx(14)};
  line-height: ${hRatioPx(20)};
  font-weight: 400;
  color: ${GREY700};
`;

export const CopyButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const CopyButtonText = styled.Text`
  font-size: ${hRatioPx(12)};
  line-height: ${hRatioPx(18)};
  font-weight: 400;
  color: ${LINK};
`;

export const GestureBar = styled.View`
  justify-content: center;
`;

export const AdjustingBarSection = styled.View`
  padding: ${hRatioPx(18)} 0;
  justify-content: center;
  align-items: center;
`;

export const AdjustingBar = styled.View`
  width: ${hRatioPx(48)};
  height: ${hRatioPx(4)};
  border-radius: ${hRatioPx(10)};
  background-color: ${GREY500};
`;

export const ContentSection = styled.View`
  background-color: ${WHITE};
`;

export const GestureSection = styled(Animated.View)`
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${WHITE};
`;

export const Title = styled.View`
  align-items: center;
  padding: ${ratioPx(8)} 0;
`;

export const TitleText = styled.Text`
  font-size: ${ratioPx(18)};
  font-weight: 400;
  line-height: ${ratioPx(27)};
  color: ${GREY700};
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const RelativeWrapper = styled.View`
  position: relative;
  background-color: red;
`;
