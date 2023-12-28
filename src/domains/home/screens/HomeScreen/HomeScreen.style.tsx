import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { px, ratioPx } from '../../../../utils/platform';
import { GREY500 } from '../../../../constants/colors';
import ImageWithRef from './components/ImageWithRef';

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
  background-color: gray;
  width: 100%;
  flex: 1;
`;

export const TrashContainer = styled.View`
  background-color: bisque;
  width: 100%;
  flex: 1;
`;

export const SizeBarContainer = styled.View`
  background-color: aqua;
  height: 60px;
  width: 100%;
  position: relative;
  align-items: center;
`;

export const Temp = styled.View`
  position: absolute;
  width: ${ratioPx(311)};
  bottom: 0;
`;

export const SizeBar = styled(ImageWithRef)`
  width: 100%;
  height: ${ratioPx(16)};
`;

export const Temp2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 1px 10px;
`;

export const SizeIndicatorContainer = styled.View`
  align-items: center;
`;

export const SizeExample = styled.View``;

export const SizeIndicator = styled.View`
  background-color: black;
  width: ${px(28)};
  height: ${px(28)};
  border-radius: ${px(14)};
`;

export const SizeIndicatorTitle = styled.View``;

export const CategoryContainer = styled.View`
  background-color: aquamarine;
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
  overflow: hidden;
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
