import styled from 'styled-components/native';
import { hRatioPx, px, ratioPx, scale } from '@utils/platform';
import { StyleSheet } from 'react-native';
import { GREY500, WHITE } from '@constants/colors';
import Animated from 'react-native-reanimated';

interface ContentSectionProps {
  gestureBarHeight: number;
  height: number;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const MotionContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const TrashContainer = styled.View`
  width: 100%;
  z-index: 1000;
  padding: ${hRatioPx(17)} 0;
`;

export const TrashHistoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${hRatioPx(4)} ${ratioPx(24)};
`;

export const Title = styled.View``;

export const TrashCount = styled.View``;

export const TrashHistoryHeaderText = styled.Text`
  font-size: ${hRatioPx(18)};
  font-weight: 700;
  line-height: ${hRatioPx(28)};
`;

export const MyTrashLogContainer = styled.View`
  padding: 0 ${ratioPx(24)};
  height: 100%;
`;

export const FilterContainer = styled.View`
  width: 100%;
  padding: 0 32px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f6;
`;

export const EmptyTrashButton = styled.TouchableOpacity`
  position: absolute;
  padding: ${hRatioPx(6)} ${hRatioPx(12)};
  bottom: ${hRatioPx(13)};
  left: ${ratioPx(18)};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: #e5e5ea;
  background-color: #fff;
  z-index: 3;
`;

export const EmptyTrashButtonText = styled.Text`
  font-size: ${hRatioPx(14)};
  font-weight: 400;
  line-height: ${hRatioPx(20)};
`;

export const GestureSection = styled(Animated.View)`
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${WHITE};
`;

export const GestureBar = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AdjustingBarSection = styled.View`
  padding: ${hRatioPx(18)} 0;
  justify-content: center;
  align-items: center;
`;

export const AdjustingBar = styled.View`
  width: ${hRatioPx(48)};
  height: ${hRatioPx(4)};
  border-radius: ${hRatioPx(10)};
  background-color: ${GREY500};
`;

export const ContentSection = styled.View<ContentSectionProps>`
  position: absolute;
  width: 100%;
  height: ${({ height }) => px(height)};
  top: ${({ gestureBarHeight }) => px(gestureBarHeight)};
  background-color: ${WHITE};
`;

export const styles = StyleSheet.create({
  trashCountContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    zIndex: 3,
    alignItems: 'center',
  },
  trashCountBox: {
    position: 'absolute',
    bottom: scale(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashCountText: { fontSize: scale(36), fontWeight: '700' },
  imageBackground: { flex: 1, justifyContent: 'flex-end' },
});
