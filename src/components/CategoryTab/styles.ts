import styled from 'styled-components/native';
import { GREY200, PRIMARY } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  flex-direction: row;
  height: ${ratioPx(60)};
  justify-content: flex-end;
`;

export const Category = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${({ selected }) => (selected ? PRIMARY : GREY200)};
  border-bottom-width: ${({ selected }) => (selected ? ratioPx(3) : ratioPx(1))};
`;
