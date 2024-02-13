import React from 'react';
import { SeparatorHorizontal, SeparatorVertical } from './Separator.style';

interface SeparatorProps {
  horizontal?: boolean;
  color?: string;
  length: number | string;
  thickness?: number;
  margin: number;
}

const Separator = ({ horizontal, color, length, thickness, margin }: SeparatorProps) => {
  return horizontal ? (
    <SeparatorHorizontal color={color} length={length} thickness={thickness} margin={margin} />
  ) : (
    <SeparatorVertical color={color} length={length} thickness={thickness} margin={margin} />
  );
};

export default Separator;
