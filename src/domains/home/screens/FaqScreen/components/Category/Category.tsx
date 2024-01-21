import styled from 'styled-components/native';
import React from 'react';
import { Regular16 } from '../../../../../../components/Typography/Typography';
import { BLACK, GREY500, PRIMARY } from '../../../../../../constants/colors';

interface CategoryProps {
  category: string;
  selected: boolean;
  onPress: () => void;
}

const Box = styled.Pressable<{ selected: boolean }>`
  padding: 6px 12px;
  margin-right: 8px;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? 'transparent' : GREY500)};
  border-radius: 30px;
  background-color: ${({ selected }) => (selected ? PRIMARY : 'transparent')};
`;

const Category = ({ category, selected, onPress }: CategoryProps) => {
  return (
    <Box selected={selected} onPress={onPress}>
      <Regular16 color={BLACK}>{category}</Regular16>
    </Box>
  );
};

export default Category;
