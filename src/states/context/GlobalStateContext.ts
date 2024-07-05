import React, { Dispatch, SetStateAction, useContext } from 'react';
import { View } from 'react-native';

interface GlobalStateContextProps {
  screenRef: React.RefObject<View> | null;
  setScreenRef: Dispatch<SetStateAction<React.RefObject<View> | null>>;
}

export const GlobalStateContext = React.createContext<GlobalStateContextProps>({
  screenRef: null,
  setScreenRef: () => {},
});

export const useGlobalState = () => useContext(GlobalStateContext);

export default GlobalStateContext;
