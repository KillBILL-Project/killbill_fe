import styled from 'styled-components/native';
import { GREY500, PRIMARY } from '../../../../../../constants/colors';

export const Box = styled.Pressable<{ selected: boolean }>`
  padding: 6px 12px;
  margin-right: 8px;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? 'transparent' : GREY500)};
  border-radius: 30px;
  background-color: ${({ selected }) => (selected ? PRIMARY : 'transparent')};
`;
