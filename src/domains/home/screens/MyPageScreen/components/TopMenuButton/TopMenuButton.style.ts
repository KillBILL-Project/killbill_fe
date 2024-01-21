import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';
import { ICON_BTN_BG } from '../../../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../../../constants/constants';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${ratioPx(104)};
  height: ${ratioPx(68)};
  background-color: ${ICON_BTN_BG};
  border-radius: ${ratioPx(AUTH_BORDER_RADIUS)};
`;
export const Icon = styled.Image``;
export const Title = styled.View``;
