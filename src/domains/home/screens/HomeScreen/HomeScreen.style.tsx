import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { px, ratioPx } from '../../../../utils/platform';
import { GREY500 } from '../../../../constants/colors';

interface EmptyContainerProps {
  inactiveTrashHistoryHeight: number;
}

interface ScrollBarContainerProps {
  scrollBarContainerHeight: number;
}
interface TrashHistoryHeaderProps {
  trashHistoryHeaderHeight: number;
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

export const CategoryContainer = styled.View`
  flex: 1;
`;

export const CategoryScroll = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
`;

export const EmptyContainer = styled.View<EmptyContainerProps>`
  height: ${({ inactiveTrashHistoryHeight }) => px(inactiveTrashHistoryHeight)};
`;

export const PanResponderContainer = styled.View``;

export const TrashHistoryContainer = styled(Animated.View)`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  border-top-left-radius: ${ratioPx(15)};
  border-top-right-radius: ${ratioPx(15)};
`;

export const ScrollBarContainer = styled.View<ScrollBarContainerProps>`
  width: 100%;
  height: ${({ scrollBarContainerHeight }) => px(scrollBarContainerHeight)};
  justify-content: center;
  align-items: center;
`;

export const ScrollBar = styled.View`
  width: ${ratioPx(48)};
  height: ${ratioPx(4)};
  border-radius: ${ratioPx(2)};
  background-color: ${GREY500};
`;

export const TrashHistoryHeader = styled.View<TrashHistoryHeaderProps>`
  height: ${({ trashHistoryHeaderHeight }) => px(trashHistoryHeaderHeight)};
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${ratioPx(24)};
`;

export const Title = styled.View``;

export const TrashCount = styled.View``;

export const ItemContainer = styled.View`
  flex: 1;
  padding: 0 ${ratioPx(12)};
`;

export const FilterContainer = styled.View`
  width: 100%;
  padding: 14px 33px 6px 32px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f6;
`;
