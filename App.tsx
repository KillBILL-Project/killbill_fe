import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './src/navigation';
import AppFrame from './src/components/common/AppFrame';

const App = () => {
  return (
    <RecoilRoot>
      <AppFrame>
        <Navigation />
      </AppFrame>
    </RecoilRoot>
  );
};

export default App;
