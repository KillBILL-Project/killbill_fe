import styled from 'styled-components/native';

interface HeaderTouchableProps {
  padding: number;
  margin: number;
}

interface HeaderButtonIconProps {
  width: number;
  height: number;
  rotate?: number;
}

export const HeaderTouchable = styled.TouchableOpacity<HeaderTouchableProps>`
  padding: ${({ padding }) => `${padding}px`};
  margin: ${({ margin }) => `${margin}px`};
  justify-content: center;
`;

export const HeaderButtonIcon = styled.Image<HeaderButtonIconProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : '')};
`;
