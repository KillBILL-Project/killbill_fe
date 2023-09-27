import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Main = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Main>
      <Text>안녕하세요</Text>
    </Main>
  );
};

type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
