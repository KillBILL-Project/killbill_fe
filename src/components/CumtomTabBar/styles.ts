import styled from 'styled-components/native';
import { GREY400, GREY700, GREY900, WHITE } from '@constants/colors';
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
  padding: ${ratioPx(5)} 0;
`;

export const TabIconStyle = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
  margin-bottom: ${ratioPx(4)};
`;

export const TabNameText = styled.Text<{ isFocused: boolean }>`
  font-size: ${ratioPx(11)};
  font-weight: 400;
  line-height: ${ratioPx(13)};
  color: ${({ isFocused }) => (isFocused ? GREY900 : GREY700)};
`;
