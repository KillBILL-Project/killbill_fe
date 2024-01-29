import styled from 'styled-components/native';
import { BTN_DESELECTED_BG, PRIMARY, WHITE } from '../../../../constants/colors';
import { ratioPx } from '../../../../utils/platform';

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${ratioPx(25)} ${ratioPx(16)};
`;

export const PraiseCard = styled.TouchableOpacity`
  position: relative;
  width: ${ratioPx(155.5)};
  height: ${ratioPx(162)};
  margin: ${ratioPx(8)};
  background-color: ${BTN_DESELECTED_BG};
  border-radius: ${ratioPx(20)};
  justify-content: center;
  align-items: center;
`;

export const PraiseCardName = styled.View`
  margin-top: ${ratioPx(16)};
`;

export const New = styled.View`
  position: absolute;
  padding: ${ratioPx(2)} ${ratioPx(6)};
  border-radius: ${ratioPx(28)};
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${PRIMARY};
  z-index: 1;
  top: ${ratioPx(8)};
  right: ${ratioPx(8)};
  justify-content: center;
  align-items: center;
`;

export const NewText = styled.Text`
  color: ${PRIMARY};
  font-size: ${ratioPx(10)};
  font-weight: 700;
  line-height: ${ratioPx(14)};
`;
