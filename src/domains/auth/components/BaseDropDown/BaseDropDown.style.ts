import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_MARGIN } from '../../../../constants/constants';
import { BLACK, GREY_3, GREY_4 } from '../../../../constants/colors';

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${INPUT_MARGIN};
`;

export const InputTitle = styled.Text`
  padding-left: 4px;
  margin-bottom: 10px;
  color: ${BLACK};
`;

export const DropDownContainer = styled.TouchableOpacity``;

export const DropDownTitle = styled.View<{ isDropDownActive: boolean }>`
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
