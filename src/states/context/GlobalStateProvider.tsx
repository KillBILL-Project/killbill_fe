import React, { ReactNode, useMemo, useState } from 'react';
import { View } from 'react-native';
import GlobalStateContext from '@states/context/GlobalStateContext';

const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [screenRef, setScreenRef] = useState<React.RefObject<View> | null>(null);

  return useMemo(() => {
    return (
      <GlobalStateContext.Provider
        value={{
          screenRef,
          setScreenRef,
        }}
      >
        {children}
      </GlobalStateContext.Provider>
    );
  }, [children, screenRef, setScreenRef]);
};

export default GlobalStateProvider;
