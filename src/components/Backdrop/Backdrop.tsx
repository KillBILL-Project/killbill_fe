import React, { ReactNode } from 'react';
import { FullScreen } from './BackDrop.style';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
  return <FullScreen>{children}</FullScreen>;
};

export default Backdrop;
