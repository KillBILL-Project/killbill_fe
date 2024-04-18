import styled from 'styled-components/native';
import { BLACK, GREY400, WHITE } from '../../../../../../constants/colors';
import { px, ratioPx } from '../../../../../../utils/platform';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const DateContainer = styled.View`
  background-color: ${WHITE};
  border-radius: ${px(10)};
  padding: ${ratioPx(8)} 0;
  margin: ${ratioPx(8)} ${ratioPx(16)} ${ratioPx(8)} 0;
  width: ${ratioPx(56)};
  justify-content: center;
  align-items: center;
`;

export const Date = styled.Text`
  font-size: ${ratioPx(20)};
  font-weight: 500;
  line-height: ${ratioPx(30)};
  color: ${BLACK};
`;

export const Day = styled.Text`
  font-size: ${ratioPx(12)};
  font-weight: 500;
  line-height: ${ratioPx(18)};
  color: ${BLACK};
`;

export const ContentContainer = styled.View`
  width: 100%;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${GREY400};
`;

export const Content = styled.View`
  padding: ${ratioPx(20)} 0;
  justify-content: center;
  flex: 1;
`;
