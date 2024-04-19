import styled from 'styled-components/native';
import {
  AUTH_BORDER_RADIUS,
  AUTH_HEIGHT,
  INPUT_MARGIN,
  INPUT_WIDTH,
} from '../../../../constants/constants';
import { px, ratioPx } from '../../../../utils/platform';

interface BaseTouchableProps {
  backgroundColor: string;
  borderColor?: string;
  marginBottom?: number;
}
export const BaseTouchable = styled.TouchableOpacity<BaseTouchableProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${px(AUTH_HEIGHT)};
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? ratioPx(marginBottom) : 0)};
  position: relative;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  border-width: ${({ borderColor }) => (borderColor ? '1px' : 0)};
  border-color: ${({ borderColor }) => borderColor};
  overflow: hidden;
`;

export const BaseButtonIcon = styled.View`
  position: absolute;
  left: 20px;
`;

export const BaseButtonTitle = styled.View`
  justify-content: center;
  align-items: center;
`;
