import React from 'react';
import { Regular16 } from '../../../../../../components/Typography';
import { BLACK } from '../../../../../../constants/colors';
import { Box } from './Category.style';

interface CategoryProps {
  category: string;
  selected: boolean;
  onPress: () => void;
}

const Category = ({ category, selected, onPress }: CategoryProps) => {
  return (
    <Box selected={selected} onPress={onPress}>
      <Regular16 color={BLACK}>{category}</Regular16>
    </Box>
  );
};

export default Category;
