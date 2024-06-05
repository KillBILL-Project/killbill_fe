import styled from 'styled-components/native';
import { px, ratioPx } from '../../utils/platform';

export const Container = styled.View<{ width: number | string; height?: number | string }>`
  width: ${({ width }) => (!width ? 'auto' : typeof width === 'string' ? width : ratioPx(width))};
  flex: ${({ height }) => (height ? 0 : 1)};
  height: ${({ height }) =>
    !height ? 'auto' : typeof height === 'string' ? height : ratioPx(height)};
  justify-content: center;
  align-items: center;
`;

export const Item = styled.View<{ width: number }>`
  width: ${({ width }) => px(width / 3)};
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-size: 24px;
`;
