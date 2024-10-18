import styled from 'styled-components/native';
import { LIGHT, WHITE } from '@constants/colors';
import { AUTH_BORDER_RADIUS } from '@constants/constants';
import { ratioPx } from '@utils/platform';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${LIGHT};
  border-radius: ${ratioPx(AUTH_BORDER_RADIUS)};
  flex-direction: row;
  padding: ${ratioPx(20)} ${ratioPx(24)};
`;

export const TextColumn = styled.View`
  flex: 1;
  justify-content: center;
  gap: ${ratioPx(5)};
`;

export const Title = styled.View``;

export const TitleText = styled.Text`
  font-size: ${ratioPx(18)};
  font-weight: 400;
  line-height: ${ratioPx(27)};
  color: ${WHITE};
`;

export const Description = styled.View``;

export const DescriptionText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 400;
  line-height: ${ratioPx(20)};
  color: ${WHITE};
`;
