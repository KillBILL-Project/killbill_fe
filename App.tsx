import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './src/navigation';
import DialogProvider from './src/states/context/DialogProvider';

const App = () => {
  return (
    <RecoilRoot>
      <DialogProvider>
        <Navigation />
      </DialogProvider>
    </RecoilRoot>
  );
};

export default App;
