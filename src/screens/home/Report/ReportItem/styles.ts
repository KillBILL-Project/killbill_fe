import styled from 'styled-components/native';
import { BTN_DESELECTED_BG } from '@constants/colors';
import { AUTH_BORDER_RADIUS } from '@constants/constants';
import { px, ratioPx } from '@utils/platform';

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const WeekNumber = styled.Text`
  font-size: ${ratioPx(20)};
  font-weight: 500;
  line-height: ${ratioPx(30)};
`;

export const WeekText = styled.Text`
  font-size: ${ratioPx(12)};
  font-weight: 500;
  line-height: ${ratioPx(18)};
`;

export const WeeklyContainer = styled.View`
  width: ${ratioPx(56)};
  height: ${ratioPx(62)};
  align-items: center;
  justify-content: center;
  background-color: ${BTN_DESELECTED_BG};
  margin: ${ratioPx(16)} ${ratioPx(16)} ${ratioPx(16)} 0;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
`;

export const ReportContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Period = styled.View``;

export const ReportTitle = styled.View``;

export const ArrowContainer = styled.View`
  width: ${px(20)};
  height: ${px(20)};
  justify-content: center;
  align-items: center;
`;
