import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';
import { LIGHT } from '../../../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../../../constants/constants';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${ratioPx(100)};
  background-color: ${LIGHT};
  border-radius: ${ratioPx(AUTH_BORDER_RADIUS)};
  flex-direction: row;
  padding: 0 ${ratioPx(24)};
`;
export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Icon = styled.Image``;
export const Title = styled.View``;
export const Description = styled.View``;
