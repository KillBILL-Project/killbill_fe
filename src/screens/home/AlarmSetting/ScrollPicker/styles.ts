import styled from 'styled-components/native';
import { PRIMARY, WHITE } from '@constants/colors';
import { px, ratioPx } from '@utils/platform';

interface ContainerProps {
  height: number;
}

interface ItemTextContainerProps {
  height: number;
  margin: number;
}

interface ItemTextProps {
  isSelected: boolean;
  fontSize: number;
  fontWeight: number;
}

export const ItemTextContainer = styled.View<ItemTextContainerProps>`
  height: ${({ height }) => px(height)};
  margin: ${({ margin }) => px(margin)} 0;
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled.Text<ItemTextProps>`
  color: ${({ isSelected }) => (isSelected ? PRIMARY : WHITE)};
  font-size: ${({ fontSize }) => ratioPx(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const Container = styled.View<ContainerProps>`
  height: ${({ height }) => px(height)};
`;
