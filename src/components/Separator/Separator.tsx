import React from 'react';
import { SeparatorHorizontal, SeparatorVertical } from './Separator.style';

interface SeparatorProps {
  horizontal?: boolean;
  color?: string;
  length: number | string;
  thickness?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Separator = ({
  horizontal,
  color,
  length,
  thickness,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: SeparatorProps) => {
  return horizontal ? (
    <SeparatorHorizontal
      color={color}
      length={length}
      thickness={thickness}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  ) : (
    <SeparatorVertical
      color={color}
      length={length}
      thickness={thickness}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  );
};

export default Separator;
