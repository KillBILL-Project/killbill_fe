import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import HeaderTabBar, { SelectType } from '../components/HeaderTabBar/HeaderTabBar';
import HistoryItem from '../components/HistoryItem/HistoryItem';
import { BLACK } from '../../../../constants/colors';
import DateLabel from '../components/DateLabel/DateLabel';

const selectList: SelectType[] = [
  { key: 'emptyHistory', name: '비우기 이력' },
  { key: 'throwHistory', name: '배출 이력' },
];

const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

const MyHistoryScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const onPress = (key: string) => setSelected(key);

  // TODO: selected 에 따라 list 를 변경하도록 설정 -> api 호출 시 ActivityIndicator 나오도록 하여 자연스럽게 처리

  return (
    <Screen title="내 히스토리">
      <HeaderTabBar selectList={selectList} selectedKey={selected} onPress={onPress} />
      <Container>
        <DateLabel year={2023} month={8} />
        <HistoryItem text={{ top: '2', bottom: 'MON' }}>
          <View style={{ backgroundColor: BLACK, width: 100, height: 20 }} />
        </HistoryItem>
      </Container>
    </Screen>
  );
};

export default MyHistoryScreen;
