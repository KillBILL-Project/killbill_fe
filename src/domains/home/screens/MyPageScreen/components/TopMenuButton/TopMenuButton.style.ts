import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';
import { ICON_BTN_BG } from '../../../../../../constants/colors';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${ICON_BTN_BG};
  border-radius: ${ratioPx(6)};
  padding: ${ratioPx(6)} 0;
`;
export const Title = styled.View``;
