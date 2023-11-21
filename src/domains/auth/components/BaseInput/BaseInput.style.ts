import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_MARGIN } from '../../../../constants/constants';
import { BLACK, GREY_3, WHITE } from '../../../../constants/colors';

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${INPUT_MARGIN};
`;

export const InputTitle = styled.Text`
  padding-left: 4px;
  margin-bottom: 10px;
  color: ${BLACK};
`;

export const BaseTextInput = styled.TextInput`
  height: ${AUTH_HEIGHT};
  width: 100%;
  padding: 5px 15px;
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY_3};
  border-radius: ${AUTH_BORDER_RADIUS};
`;
