import styled from 'styled-components/native';
import { px, ratioPx } from '../../../../../../utils/platform';
import { BLACK, GREY500, WHITE } from '../../../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../../../constants/constants';

export const Container = styled.View`
  padding: ${ratioPx(16)};
  background-color: ${WHITE};
  border-radius: ${px(15)};
  margin: ${ratioPx(16)} ${ratioPx(16)} 0;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: ${ratioPx(21)};
`;

export const CycleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DayContainer = styled.View`
  flex-direction: row;
`;

const Day = styled.View`
  width: ${ratioPx(26)};
  height: ${ratioPx(26)};
  border-radius: ${ratioPx(13)};
  justify-content: center;
  align-items: center;
  margin: ${ratioPx(3)};
`;

export const SelectedDay = styled(Day)`
  background-color: ${BLACK};
`;

export const NonSelectedDay = styled(Day)`
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY500};
`;
