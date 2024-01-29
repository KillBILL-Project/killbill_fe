import styled from 'styled-components/native';
import { ratioPx } from '../../../../../utils/platform';
import { HEADER_HEIGHT } from '../../../../../constants/constants';
import { BTN_DESELECTED_BG, GREY400, GREY700 } from '../../../../../constants/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${ratioPx(HEADER_HEIGHT * 2)};
`;

export const CardContainer = styled.View`
  background-color: ${BTN_DESELECTED_BG};
  border-radius: ${ratioPx(20)};
  align-items: center;
  padding: ${ratioPx(40)};
  margin: ${ratioPx(24)};
`;

export const CardImage = styled.Image`
  width: ${ratioPx(192)};
  height: ${ratioPx(192)};
  margin-bottom: ${ratioPx(40)};
`;

export const Title = styled.View`
  margin-bottom: ${ratioPx(12)};
`;

export const TitleText = styled.Text`
  color: ${GREY700};
  font-size: ${ratioPx(24)};
  font-weight: 700;
  line-height: ${ratioPx(42)};
`;

export const Content = styled.View``;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  padding: ${ratioPx(24)};
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: ${ratioPx(159.5)};
  height: ${ratioPx(56)};
  border-radius: ${ratioPx(10)};
  border-color: ${GREY400};
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;
