import styled from 'styled-components/native';
import { MAIN } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  height: ${ratioPx(60)};
  width: 100%;
  background-color: ${MAIN};
  flex-direction: row;
  align-items: center;
  padding-left: ${ratioPx(24)};
`;

export const ListContainer = styled.View`
  flex: 1;
`;

export const ListTitle = styled.View``;
