import styled from 'styled-components/native';
import { GREY500, WHITE } from '../../../../constants/colors';
import { ratioPx } from '../../../../utils/platform';

export const Container = styled.View`
  flex: 1;
  padding: ${ratioPx(24)};
  background-color: ${WHITE};
`;

export const AuthDetailContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const BaseButtonContainer = styled.View`
  align-items: center;
`;

export const SkipButton = styled.TouchableOpacity`
  align-self: center;
  padding: ${ratioPx(6)} ${ratioPx(24)};
  margin-top: ${ratioPx(12)};
`;

export const SkipButtonText = styled.Text`
  font-size: 16px;
  color: ${GREY500};
`;
