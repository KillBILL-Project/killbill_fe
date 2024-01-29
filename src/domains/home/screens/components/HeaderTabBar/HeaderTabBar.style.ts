import styled from 'styled-components/native';
import { PRIMARY } from '../../../../../constants/colors';
import { ratioPx } from '../../../../../utils/platform';

export const SelectBox = styled.View`
  flex-direction: row;
  height: ${ratioPx(60)};
  justify-content: flex-end;
`;

export const Select = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${PRIMARY};
  border-bottom-width: ${({ selected }) => (selected ? ratioPx(3) : 0)};
`;
