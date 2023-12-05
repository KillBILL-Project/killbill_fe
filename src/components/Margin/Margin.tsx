import React from 'react';
import styled from 'styled-components/native';

const MarginStyled = styled.View<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const Margin = ({ height }: { height: number }) => {
  return <MarginStyled height={height} />;
};

export default Margin;
