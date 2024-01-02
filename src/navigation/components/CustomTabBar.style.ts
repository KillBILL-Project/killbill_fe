import styled from 'styled-components/native';
import { px, ratioPx } from '../../utils/platform';
import { GREY400 } from '../../constants/colors';
import { TAB_HEIGHT } from '../../constants/constants';

export const TabBar = styled.View`
  height: ${px(TAB_HEIGHT)};
  flex-direction: row;
  border-width: 1px;
  border-bottom-width: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  border-color: ${GREY400};
  bottom: 0;
`;

export const TabContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${ratioPx(5)};
`;

export const TabIconStyle = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
  margin: ${ratioPx(3)};
`;
