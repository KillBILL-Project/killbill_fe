import React from 'react';
import { MarginStyled } from './Margin.style';

const Margin = ({ height }: { height: number }) => {
  return <MarginStyled height={height} />;
};

export default Margin;
