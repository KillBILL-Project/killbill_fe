import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_MARGIN } from '../../../../constants/constants';
import { BLACK, MAIN, BTN_DESELECTED_BG } from '../../../../constants/colors';

interface GenderButtonProps {
  isSelected: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${INPUT_MARGIN};
`;

export const InputTitle = styled.Text`
  padding-left: 4px;
  margin-bottom: 10px;
  color: ${BLACK};
`;

export const GenderSelectContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GenderButton = styled.TouchableOpacity<GenderButtonProps>`
  justify-content: center;
  align-items: center;
  width: 48%;
  height: ${AUTH_HEIGHT};
  background-color: ${({ isSelected }) => (isSelected ? MAIN : BTN_DESELECTED_BG)};
  border-radius: ${AUTH_BORDER_RADIUS};
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? MAIN : 'transparent')};
`;
