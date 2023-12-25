import React from 'react';
import { SpacerView } from './Spacer.style';

interface SpacerProps {
  width?: number;
  height?: number;
}

const Spacer = ({ width, height }: SpacerProps) => {
  return <SpacerView width={width} height={height} />;
};

export default Spacer;
