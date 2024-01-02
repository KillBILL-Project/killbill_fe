import styled from 'styled-components/native';
import {
  AUTH_BORDER_RADIUS,
  AUTH_HEIGHT,
  INPUT_MARGIN,
  INPUT_TITLE_MARGIN,
  INPUT_WIDTH,
} from '../../../../constants/constants';
import { GREY400, WHITE } from '../../../../constants/colors';
import { px } from '../../../../utils/platform';

export const Container = styled.View`
  width: ${px(INPUT_WIDTH)};
  margin-bottom: ${px(INPUT_MARGIN)};
`;

export const InputTitle = styled.View`
  margin-bottom: ${px(INPUT_TITLE_MARGIN)};
`;

export const BaseTextInput = styled.TextInput`
  height: ${px(AUTH_HEIGHT)};
  width: 100%;
  padding: 5px 15px;
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY400};
  border-radius: ${px(AUTH_BORDER_RADIUS)};
`;
