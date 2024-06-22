import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DialogProvider from '@states/context/DialogProvider';
import Navigation from './src/navigation';

const App = (): React.JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DialogProvider>
          <Navigation />
        </DialogProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
