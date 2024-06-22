import styled from 'styled-components/native';
import { GREY300 } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  flex: 1;
  background-color: ${GREY300};
  padding: ${ratioPx(24)};
`;
