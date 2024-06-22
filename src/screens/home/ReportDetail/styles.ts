import styled from 'styled-components/native';
import { BLACK, GREY400, GREY600, PRIMARY, WHITE } from '@constants/colors';
import { AUTH_BORDER_RADIUS } from '@constants/constants';
import { px, ratioPx } from '@utils/platform';

export const Container = styled.ScrollView``;

export const Header = styled.View`
  position: absolute;
  top: -200px;
  width: 100%;
  height: ${ratioPx(293)};
  background-color: ${BLACK};
`;

export const OverviewContainer = styled.View`
  background-color: ${WHITE};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  margin: ${ratioPx(16)} ${ratioPx(24)} ${ratioPx(10)} ${ratioPx(24)};
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

export const DailyIndicator = styled.View<{ attended: boolean }>`
  width: ${ratioPx(26)};
  height: ${ratioPx(26)};
  border-width: 1px;
  border-radius: ${ratioPx(13)};
  border-color: ${({ attended }) => (attended ? 'transparent' : GREY400)};
  background-color: ${({ attended }) => (attended ? PRIMARY : 'transparent')};
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

export const WeeklyChangeAmount = styled.View`
  flex-direction: row;
  padding: ${ratioPx(4)} ${ratioPx(6)};
  justify-content: center;
  align-items: center;
`;

export const WeeklyChangeAmountText = styled.Text`
  margin-left: ${ratioPx(4)};
  font-size: ${ratioPx(12)};
  font-weight: 400;
  color: ${GREY600};
`;

export const TrashSummaryContainer = styled.View`
  background-color: ${WHITE};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
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
  height: ${ratioPx(200)};
  margin: ${ratioPx(16)} 0;
`;

export const TrashChangeGuide = styled.View`
  align-items: center;
`;
