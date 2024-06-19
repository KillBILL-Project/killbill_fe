import styled from 'styled-components/native';
import { MAIN, PRIMARY } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  position: absolute;
  padding: ${ratioPx(4)} ${ratioPx(8)};
  border-radius: ${ratioPx(28)};
  background-color: ${MAIN};
  border-width: 1px;
  border-color: ${PRIMARY};
  z-index: 1;
  top: ${ratioPx(8)};
  right: ${ratioPx(8)};
  justify-content: center;
  align-items: center;
`;

export const NewText = styled.Text`
  color: ${PRIMARY};
  font-size: ${ratioPx(12)};
  font-weight: 700;
  line-height: ${ratioPx(14)};
`;
