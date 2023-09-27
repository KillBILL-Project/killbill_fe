import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Main = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Main>
      <Text>안녕하세요</Text>
    </Main>
  );
};

export default App;
