import styled from 'styled-components/native';
import { px, ratioPx } from '../../../../utils/platform';
import { GREY500 } from '../../../../constants/colors';

interface EmptyContainerProps {
  inactiveTrashHistoryHeight: number;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MotionContainer = styled.View`
  background-color: ${GREY500};
  width: 100%;
  height: 400px;
  flex: 1;
`;

export const TrashContainer = styled.View`
  width: 100%;
  height: 250px;
`;

export const EmptyContainer = styled.View<EmptyContainerProps>`
  height: ${({ inactiveTrashHistoryHeight }) => px(inactiveTrashHistoryHeight)};
`;

export const TrashHistoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${ratioPx(8)} ${ratioPx(16)};
`;

export const Title = styled.View``;

export const TrashCount = styled.View``;

export const FilterContainer = styled.View`
  width: 100%;
  padding: 0 32px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f6;
`;
