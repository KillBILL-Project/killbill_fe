import styled from 'styled-components/native';
import { px, ratioPx } from '@utils/platform';
import { BTN_DESELECTED_BG } from '@constants/colors';
import { AUTH_BORDER_RADIUS } from '@constants/constants';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LeftIcon = styled.View`
  width: ${ratioPx(56)};
  height: ${ratioPx(62)};
  align-items: center;
  justify-content: center;
  background-color: ${BTN_DESELECTED_BG};
  margin: ${ratioPx(16)} ${ratioPx(16)} ${ratioPx(16)} 0;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const RightIcon = styled.View`
  width: ${px(20)};
  height: ${px(20)};
  justify-content: center;
  align-items: center;
`;

export const RightIconImage = styled.Image`
  width: ${ratioPx(20)};
  height: ${ratioPx(20)};
`;
