import React from 'react';
import { Text } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import { Container } from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <Screen title="홈">
      <Container>
        <Text>안녕하세요</Text>
      </Container>
    </Screen>
  );
};

export default HomeScreen;
