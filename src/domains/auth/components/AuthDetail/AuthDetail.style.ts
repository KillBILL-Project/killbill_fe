import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_MARGIN } from '../../../../constants/constants';
import { BLACK, GREEN, GREEN_2, GREY_2, GREY_8 } from '../../../../constants/colors';

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

export const GenderButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  justify-content: center;
  align-items: center;
  width: 48%;
  height: ${AUTH_HEIGHT};
  background-color: ${({ isSelected }) => (isSelected ? GREEN : GREY_2)};
  border-radius: ${AUTH_BORDER_RADIUS};
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? GREEN_2 : 'transparent')};
`;

export const GenderButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? BLACK : GREY_8)};
`;
