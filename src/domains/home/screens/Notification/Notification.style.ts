import styled from 'styled-components/native';
import { GREY300, GREY400, WHITE } from '../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../constants/constants';
import { px, ratioPx } from '../../../../utils/platform';

export const Container = styled.View`
  flex: 1;
  background-color: ${GREY300};
  padding: ${ratioPx(24)};
`;

export const Container2 = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const DayIndicator = styled.View`
  background-color: ${WHITE};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  padding: ${ratioPx(8)} 0;
  margin: ${ratioPx(8)} ${ratioPx(16)} ${ratioPx(8)} 0;
  width: ${ratioPx(56)};
  justify-content: center;
  align-items: center;
`;

export const Con = styled.View`
  padding: ${ratioPx(20)} 0;
  justify-content: center;
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${GREY400};
`;

export const Container3 = styled.View`
  flex: 1;
  justify-content: center;
`;
