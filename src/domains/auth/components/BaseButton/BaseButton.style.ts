import styled from 'styled-components/native';
import {
  AUTH_BORDER_RADIUS,
  AUTH_HEIGHT,
  INPUT_BORDER_WIDTH,
} from '../../../../constants/constants';

interface BaseTouchableProps {
  backgroundColor: string;
  borderColor?: string;
}

interface BaseButtonTitleTextProps {
  color: string;
}

export const BaseTouchable = styled.TouchableOpacity<BaseTouchableProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${AUTH_HEIGHT};
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
  position: relative;
  border-radius: ${AUTH_BORDER_RADIUS};
  border-width: ${({ borderColor }) => (borderColor ? INPUT_BORDER_WIDTH : 0)};
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

export const BaseButtonTitleText = styled.Text<BaseButtonTitleTextProps>`
  color: ${({ color }) => color};
`;
