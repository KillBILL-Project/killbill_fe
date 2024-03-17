import styled from 'styled-components/native';
import { ratioPx } from '../../../../utils/platform';

export const Container = styled.View`
  flex: 1;
  padding: ${ratioPx(8)};
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;
