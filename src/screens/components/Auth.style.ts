import styled from 'styled-components/native';
import {
  AUTH_BORDER_RADIUS,
  AUTH_HEIGHT,
  INPUT_BORDER_WIDTH,
  INPUT_MARGIN,
} from '../../common/constants';
import { BLACK, GREY_3, GREY_4, WHITE } from '../../common/colors';

interface MarginProps {
  height: number;
}

interface LoginButtonProps {
  backgroundColor: string;
  borderColor?: string;
}

interface LoginButtonTextProps {
  color: string;
}

export const AuthInputContainer = styled.View`
  width: 100%;
  margin-bottom: ${INPUT_MARGIN};
`;

export const AuthInputTitle = styled.Text`
  padding-left: 4px;
  margin-bottom: 10px;
  color: ${BLACK};
`;

export const LoginInput = styled.TextInput`
  height: ${AUTH_HEIGHT};
  width: 100%;
  padding: 5px 15px;
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY_3};
  border-radius: ${AUTH_BORDER_RADIUS};
`;

export const Margin = styled.View<MarginProps>`
  height: ${({ height }) => `${height}px`};
`;

export const AuthButtonStyled = styled.TouchableOpacity<LoginButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${AUTH_HEIGHT};
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
  position: relative;
  border-radius: ${AUTH_BORDER_RADIUS};
  border-width: ${({ borderColor }) => (borderColor ? INPUT_BORDER_WIDTH : 0)};
  border-color: ${({ borderColor }) => borderColor};
  overflow: hidden;
`;

export const AuthButtonIconContainer = styled.View`
  position: absolute;
  left: 20px;
`;

export const AuthButtonTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AuthButtonText = styled.Text<LoginButtonTextProps>`
  color: ${({ color }) => color};
`;

export const DropDownContainer = styled.TouchableOpacity``;

export const DropDownTitleBox = styled.View<{ isDropDownActive: boolean }>`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${AUTH_HEIGHT};
  border-width: 1px;
  border-radius: ${AUTH_BORDER_RADIUS};
  border-bottom-left-radius: ${({ isDropDownActive }) =>
    isDropDownActive ? 0 : AUTH_BORDER_RADIUS};
  border-bottom-right-radius: ${({ isDropDownActive }) =>
    isDropDownActive ? 0 : AUTH_BORDER_RADIUS};
  border-bottom-width: ${({ isDropDownActive }) => (isDropDownActive ? 0 : '1px')};
  border-color: ${GREY_3};
`;

export const DropDownTitleText = styled.Text<{ isItemSelected: boolean }>`
  color: ${({ isItemSelected }) => (isItemSelected ? BLACK : GREY_4)};
`;

export const DropDownTitleIcon = styled.Image<{ isDropDownActive: boolean }>`
  width: 25px;
  height: 25px;
  transform: rotate(${({ isDropDownActive }) => (isDropDownActive ? '180deg' : '0deg')});
`;

export const DropDownList = styled.ScrollView`
  border-width: 1px;
  border-color: ${GREY_3};
  border-radius: 0 0 ${AUTH_BORDER_RADIUS} ${AUTH_BORDER_RADIUS};
`;

export const DropDownItem = styled.TouchableOpacity`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${AUTH_HEIGHT};
`;

export const DropDownItemText = styled.Text``;
