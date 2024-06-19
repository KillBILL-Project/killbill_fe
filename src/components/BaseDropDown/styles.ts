import styled from 'styled-components/native';
import {
  AUTH_BORDER_RADIUS,
  AUTH_HEIGHT,
  INPUT_MARGIN,
  INPUT_TITLE_MARGIN,
  INPUT_WIDTH,
} from '@constants/constants';
import { GREY400 } from '@constants/colors';
import { px } from '@utils/platform';

interface DropDownTitleProps {
  isDropDownActive: boolean;
}

interface DropDownTitleIconProps {
  isDropDownActive: boolean;
}

export const Container = styled.View`
  width: ${px(INPUT_WIDTH)};
  margin-bottom: ${px(INPUT_MARGIN)};
`;

export const InputTitle = styled.View`
  margin-bottom: ${px(INPUT_TITLE_MARGIN)};
`;

export const DropDownContainer = styled.TouchableOpacity``;

export const DropDownTitle = styled.View<DropDownTitleProps>`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${px(AUTH_HEIGHT)};
  border-width: 1px;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  border-bottom-left-radius: ${({ isDropDownActive }) =>
    isDropDownActive ? 0 : px(AUTH_BORDER_RADIUS)};
  border-bottom-right-radius: ${({ isDropDownActive }) =>
    isDropDownActive ? 0 : px(AUTH_BORDER_RADIUS)};
  border-bottom-width: ${({ isDropDownActive }) => (isDropDownActive ? 0 : '1px')};
  border-color: ${GREY400};
`;

export const DropDownTitleIcon = styled.Image<DropDownTitleIconProps>`
  width: 25px;
  height: 25px;
  transform: rotate(${({ isDropDownActive }) => (isDropDownActive ? '180deg' : '0deg')});
`;

export const DropDownList = styled.ScrollView`
  border-width: 1px;
  border-color: ${GREY400};
  border-radius: 0 0 ${px(AUTH_BORDER_RADIUS)} ${px(AUTH_BORDER_RADIUS)};
`;

export const DropDownItem = styled.TouchableOpacity`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${px(AUTH_HEIGHT)};
`;
