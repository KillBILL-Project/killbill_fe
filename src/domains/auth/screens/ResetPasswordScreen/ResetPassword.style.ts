import styled from 'styled-components/native';
import { WHITE } from '../../../../constants/colors';
import { ratioPx } from '../../../../utils/platform';

export const Container = styled.View`
  flex: 1;
  background-color: ${WHITE};
  padding-bottom: ${ratioPx(24)};
`;

export const ResetPasswordContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ResetPasswordBottomContainer = styled.View`
  align-items: center;
`;
