import styled from 'styled-components/native';
import { GREY400, WHITE } from '@constants/colors';
import { TAB_HEIGHT } from '@constants/constants';
import { px, ratioPx } from '@utils/platform';

interface TabBarProps {
  bottomSafeArea: number;
}

export const TabBar = styled.View<TabBarProps>`
  height: ${({ bottomSafeArea }) => px(TAB_HEIGHT + bottomSafeArea)};
  background-color: ${WHITE};
  flex-direction: row;
  border-width: 1px;
  border-bottom-width: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-color: ${GREY400};
  bottom: 0;
  padding-bottom: ${({ bottomSafeArea }) => px(bottomSafeArea)};
  overflow: hidden;
`;

export const TabContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${ratioPx(5)};
`;

export const TabIconStyle = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
  margin: ${ratioPx(3)};
`;
