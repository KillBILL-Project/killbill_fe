import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS } from '@constants/constants';
import { ratioPx } from '@utils/platform';

export const Container = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  border-radius: ${ratioPx(AUTH_BORDER_RADIUS)};
  flex-direction: row;
`;

export const Title = styled.View`
  flex: 1;
  padding: ${ratioPx(16)} 0;
`;

export const TitleText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  line-height: ${ratioPx(24)};
`;

export const Icon = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;
