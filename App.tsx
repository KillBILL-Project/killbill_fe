import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigation from './src/navigation';

const App = () => {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
};

export default App;
