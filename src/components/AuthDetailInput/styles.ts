import styled from 'styled-components/native';
import {
  AUTH_BORDER_RADIUS,
  AUTH_HEIGHT,
  INPUT_MARGIN,
  INPUT_TITLE_MARGIN,
  INPUT_WIDTH,
} from '@constants/constants';
import { MAIN, BTN_DESELECTED_BG } from '@constants/colors';
import { px, ratioPx } from '@utils/platform';

interface GenderButtonProps {
  isSelected: boolean;
}

export const Container = styled.View`
  width: ${px(INPUT_WIDTH)};
  margin-bottom: ${px(INPUT_MARGIN)};
`;

export const InputTitle = styled.View`
  margin-bottom: ${px(INPUT_TITLE_MARGIN)};
`;

export const GenderSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: ${ratioPx(12)};
`;

export const GenderButton = styled.TouchableOpacity<GenderButtonProps>`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${px(AUTH_HEIGHT)};
  background-color: ${({ isSelected }) => (isSelected ? MAIN : BTN_DESELECTED_BG)};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? MAIN : 'transparent')};
`;
