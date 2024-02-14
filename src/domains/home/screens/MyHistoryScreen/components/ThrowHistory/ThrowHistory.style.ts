import styled from 'styled-components/native';

export const Container = styled.View<{ selected: boolean }>`
  flex: 1;
  padding: 24px;
  display: ${({ selected }) => (selected ? 'block' : 'none')};
`;
