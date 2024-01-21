import styled from 'styled-components/native';
import { px, ratioPx } from '../../../../utils/platform';
import { BTN_DESELECTED_BG, MAIN } from '../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../constants/constants';

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
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

/*-----------------------*/

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  height: ${ratioPx(60)};
  width: 100%;
  background-color: ${MAIN};
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
`;
export const SelectYear = styled.View`
  margin-right: 18px;
`;
export const SelectMonth = styled.View``;
export const ListContainer = styled.View`
  margin: 24px;
`;
export const ListTitle = styled.View``;
