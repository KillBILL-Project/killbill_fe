import styled from 'styled-components/native';
import { WHITE } from '../../../../constants/colors';
import { ratioPx } from '../../../../utils/platform';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${WHITE};
  padding: ${ratioPx(24)};
`;

export const RegisterContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const RegisterBottomContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;
