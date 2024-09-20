import styled from 'styled-components/native';
import { BLACK, GREY400, MAIN, WHITE } from '@constants/colors';
import { ratioPx } from '@utils/platform';

interface ContainerProps {
  isSelected: boolean;
}

interface DayPickerButtonTextProps {
  isSelected: boolean;
}

export const DayPickerButton = styled.TouchableOpacity<ContainerProps>`
  width: ${ratioPx(32)};
  height: ${ratioPx(32)};
  background-color: ${({ isSelected }) => (isSelected ? MAIN : WHITE)};
  border-radius: ${ratioPx(32)};
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? MAIN : GREY400)};
  justify-content: center;
  align-items: center;
`;

export const DayPickerButtonText = styled.Text<DayPickerButtonTextProps>`
  font-weight: 400;
  font-size: ${ratioPx(14)};
  line-height: ${ratioPx(18)};
  color: ${({ isSelected }) => (isSelected ? WHITE : BLACK)};
`;
