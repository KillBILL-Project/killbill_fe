import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DialogProvider from '@states/context/DialogProvider';
import GlobalStateProvider from '@states/context/GlobalStateProvider';
import { enableScreens } from 'react-native-screens';
import Navigation from './src/navigation';

const App = (): React.JSX.Element => {
  const queryClient = new QueryClient();

  enableScreens();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DialogProvider>
          <GlobalStateProvider>
            <Navigation />
          </GlobalStateProvider>
        </DialogProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
