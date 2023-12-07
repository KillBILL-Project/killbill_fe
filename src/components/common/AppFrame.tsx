import React from 'react';
import useInterceptor from '../../hooks/useInterceptor';

const AppFrame: React.FC<{ children: Element }> = ({ children }) => {
  useInterceptor();

  return <>{children}</>;
};

export default AppFrame;
