import styled from 'styled-components/native';
import { px, ratioPx } from '../../../../utils/platform';
import { BLACK, GREY400, WHITE } from '../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../constants/constants';

export const Container = styled.View``;
export const Header = styled.View`
  position: absolute;
  width: 100%;
  height: ${ratioPx(93)};
  background-color: ${BLACK};
`;
export const OverviewContainer = styled.View`
  background-color: ${WHITE};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  box-shadow: 2px 2px #00000020;
  margin: ${ratioPx(24)};
  padding: ${ratioPx(16)};
`;
export const WeeklyAttendanceStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const AttendanceTitle = styled.View``;
export const DailyIndicatorContainer = styled.View`
  flex-direction: row;
`;
export const DailyIndicator = styled.View`
  width: ${ratioPx(26)};
  height: ${ratioPx(26)};
  border-width: 1px;
  border-radius: ${ratioPx(13)};
  border-color: ${GREY400};
  justify-content: center;
  align-items: center;
  margin-left: ${ratioPx(4)};
`;
export const WeeklyChange = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const WeeklyChangeTitle = styled.View`
  flex: 1;
`;
export const WeeklyTotalAmount = styled.View``;
export const ChangeIndicator = styled.View`
  border-width: 1px;
  border-radius: ${ratioPx(3)};
  border-color: ${GREY400};
  justify-content: center;
  align-items: center;
  margin-left: ${ratioPx(4)};
`;
export const ChangeIndicatorIcon = styled.View``;
export const WeeklyChangeAmount = styled.View``;
export const TrashSummaryContainer = styled.View`
  background-color: ${WHITE};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  box-shadow: 2px 2px #00000020;
  margin: ${ratioPx(24)};
  padding: ${ratioPx(16)};
`;
export const TrashAmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TrashAmountTitle = styled.View``;
export const TrashAmount = styled.View``;
export const TrashCategoryChart = styled.View`
  height: 200px;
  margin: 16px 0;
`;
export const TrashChangeGuide = styled.View`
  align-items: center;
`;
