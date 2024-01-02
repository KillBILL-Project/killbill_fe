import React from 'react';
import { Button, Text } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import { Container } from './HomeScreen.style';
import api from '../../../../services/utils/api';

const HomeScreen = () => {
  const onPressButton = async () => {
    await api.post('/auth/test');
  };
  return (
    <Screen title="홈">
      <Container>
        <Text>안녕하세요</Text>
        <Button title="테스트" onPress={onPressButton} />
      </Container>
    </Screen>
  );
};

export default HomeScreen;
