import styled from 'styled-components/native';
import { ratioPx } from '../../../../../utils/platform';
import { AUTH_BORDER_RADIUS } from '../../../../../constants/constants';

export const Container = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${ratioPx(56)};
  border-radius: ${ratioPx(AUTH_BORDER_RADIUS)};
  flex-direction: row;
`;
export const Title = styled.View``;
export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
