import React from 'react';
import { FlatList } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import { Container } from './NotifyListScreen.style';
import Notify from './components/Notify/Notify';

const list = [
  {
    time: '4:22',
    amOrPm: '오후',
    selectedDays: Array.from({ length: 7 }, (_, i) => ({ day: i, isSelected: i % 2 === 0 })),
  },
  {
    time: '8:00',
    amOrPm: '오전',
    selectedDays: Array.from({ length: 7 }, (_, i) => ({ day: i, isSelected: i % 2 === 0 })),
  },
  {
    time: '4:30',
    amOrPm: '오전',
    selectedDays: Array.from({ length: 7 }, (_, i) => ({ day: i, isSelected: i % 2 === 0 })),
  },
];

const NotifyListScreen = () => {
  return (
    <Screen title="알림 설정">
      <Container>
        <FlatList
          data={list}
          renderItem={({ item }) => <Notify {...item} />}
          keyExtractor={item => item.time}
        />
      </Container>
    </Screen>
  );
};

export default NotifyListScreen;
