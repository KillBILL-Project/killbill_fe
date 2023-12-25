import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_MARGIN } from '../../../../constants/constants';
import { GREY400, WHITE } from '../../../../constants/colors';

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${INPUT_MARGIN};
`;

export const InputTitle = styled.View`
  margin-bottom: 6px;
`;

export const BaseTextInput = styled.TextInput`
  height: ${AUTH_HEIGHT};
  width: 100%;
  padding: 5px 15px;
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY400};
  border-radius: ${AUTH_BORDER_RADIUS};
`;
