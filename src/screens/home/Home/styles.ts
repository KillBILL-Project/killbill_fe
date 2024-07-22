import styled from 'styled-components/native';
import { px, ratioPx, scale, width } from '@utils/platform';
import { StyleSheet } from 'react-native';

interface EmptyContainerProps {
  inactiveTrashHistoryHeight: number;
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

export const EmptyTrashButton = styled.TouchableOpacity`
  position: absolute;
  padding: ${ratioPx(6)} ${ratioPx(12)};
  bottom: ${ratioPx(13)};
  left: ${ratioPx(18)};
  justify-content: center;
  align-items: center;
  border-radius: ${ratioPx(16)};
  border-width: 1px;
  border-color: #e5e5ea;
  background-color: #fff;
  z-index: 3;
`;

export const styles = StyleSheet.create({
  imageRowContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 2,
  },
  eachImageContainer: {
    width,
    height: '100%',
    padding: 20,
  },
  staticBinImage: {
    position: 'absolute',
    width,
    height: '100%',
    padding: 20,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  trashCountContainer: {
    position: 'absolute',
    zIndex: 3,
    alignItems: 'center',
  },
  trashCountBox: {
    top: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashCountText: { fontSize: scale(24), fontWeight: '700' },
  imageBackground: { flex: 1, justifyContent: 'center' },
});
