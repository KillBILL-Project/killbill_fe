import styled from 'styled-components/native';
import { ICON_BTN_BG } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${ICON_BTN_BG};
  border-radius: ${ratioPx(6)};
  padding: ${ratioPx(12)} 0 ${ratioPx(6)} 0;
  gap: ${ratioPx(6)};
`;

export const Title = styled.View``;

export const TitleText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 400;
  line-height: ${ratioPx(20)};
  color: #1c1c1e;
`;
