import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_MARGIN } from '../../../../constants/constants';
import { BLACK, GREY400, GREY500 } from '../../../../constants/colors';

interface DropDownTitleProps {
  isDropDownActive: boolean;
}

interface DropDownTitleTextProps {
  isItemSelected: boolean;
}

interface DropDownTitleIconProps {
  isDropDownActive: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${INPUT_MARGIN};
`;

export const InputTitle = styled.View`
  padding-left: 4px;
  margin-bottom: 10px;
`;

export const DropDownContainer = styled.TouchableOpacity``;

export const DropDownTitle = styled.View<DropDownTitleProps>`
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
  border-color: ${GREY400};
`;

export const DropDownTitleText = styled.Text<DropDownTitleTextProps>`
  color: ${({ isItemSelected }) => (isItemSelected ? BLACK : GREY500)};
`;

export const DropDownTitleIcon = styled.Image<DropDownTitleIconProps>`
  width: 25px;
  height: 25px;
  transform: rotate(${({ isDropDownActive }) => (isDropDownActive ? '180deg' : '0deg')});
`;

export const DropDownList = styled.ScrollView`
  border-width: 1px;
  border-color: ${GREY400};
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
