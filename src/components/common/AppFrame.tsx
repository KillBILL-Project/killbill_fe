import React, { useEffect } from 'react';
import useInterceptor from '../../hooks/useInterceptor';
import { requestUserPermission } from '../../services/api/authService';

const AppFrame: React.FC<{ children: Element }> = ({ children }) => {
  useInterceptor();

  useEffect(() => {
    requestUserPermission();
  }, []);

  return <>{children}</>;
};

export default AppFrame;
