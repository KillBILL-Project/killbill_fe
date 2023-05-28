import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';

const App = () => {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaProvider>
  );
};
export default App;
