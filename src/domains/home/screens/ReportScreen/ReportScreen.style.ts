import styled from 'styled-components/native';
import { ratioPx } from '../../../../utils/platform';
import { MAIN } from '../../../../constants/colors';

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
export const SelectYear = styled.View`
  margin-right: ${ratioPx(18)};
`;
export const SelectMonth = styled.View``;
export const ListContainer = styled.View`
  margin: ${ratioPx(24)};
`;
export const ListTitle = styled.View``;
