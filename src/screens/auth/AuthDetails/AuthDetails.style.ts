import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT } from '../../../common/constants';
import { BLACK, GREEN, GREEN_2, GREY_2, GREY_8 } from '../../../common/colors';

export type GenderButtonProps = {
  isSelected: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  align-items: center;
  width: 100%;
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
  background-color: ${({ isSelected }) => (isSelected ? GREEN : GREY_2)};
  border-radius: ${AUTH_BORDER_RADIUS};
  border-width: 1px;
  border-color: ${({ isSelected }) => (isSelected ? GREEN_2 : 'transparent')};
`;

export const AuthButtonContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const GenderButtonText = styled.Text<GenderButtonProps>`
  color: ${({ isSelected }) => (isSelected ? BLACK : GREY_8)};
`;
