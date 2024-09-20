import styled from 'styled-components/native';
import { GREY400, GREY700, GREY900, WHITE } from '@constants/colors';
import { px, ratioPx } from '@utils/platform';

interface TabBarProps {
  bottomSafeArea: number;
}

export const TabBar = styled.View<TabBarProps>`
  background-color: ${WHITE};
  flex-direction: row;
  border-top-left-radius: ${ratioPx(20)};
  border-top-right-radius: ${ratioPx(20)};
  bottom: 0;
  margin-bottom: ${({ bottomSafeArea }) => px(bottomSafeArea)};
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${GREY400};
`;

export const TabContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: ${ratioPx(9)};
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
