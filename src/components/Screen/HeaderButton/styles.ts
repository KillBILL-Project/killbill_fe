import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';

interface HeaderTouchableProps {
  padding: number;
}

interface HeaderButtonIconProps {
  width: number;
  height: number;
}

export const HeaderTouchable = styled.TouchableOpacity<HeaderTouchableProps>`
  padding: ${({ padding }) => ratioPx(padding)};
  justify-content: center;
  align-items: center;
`;

export const HeaderButtonIcon = styled.Image<HeaderButtonIconProps>`
  width: ${({ width }) => ratioPx(width)};
  height: ${({ height }) => ratioPx(height)};
`;
