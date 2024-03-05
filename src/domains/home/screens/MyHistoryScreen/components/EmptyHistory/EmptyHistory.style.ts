import styled from 'styled-components/native';

export const Container = styled.View<{ selected: boolean }>`
  flex: 1;
  display: ${({ selected }) => (selected ? 'block' : 'none')};
`;
