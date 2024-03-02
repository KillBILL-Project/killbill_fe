import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';

export const Container = styled.View<{ selected: boolean }>`
  flex: 1;
  padding: ${ratioPx(24)};
  padding-bottom: 0;
  display: ${({ selected }) => (selected ? 'block' : 'none')};
`;
