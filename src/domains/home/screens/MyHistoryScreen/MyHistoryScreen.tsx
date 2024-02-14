import React, { useState } from 'react';
import Screen from '../../../../components/Screen/Screen';
import HeaderTabBar, { SelectType } from '../components/HeaderTabBar/HeaderTabBar';
import EmptyHistory from './components/EmptyHistory';
import ThrowHistory from './components/ThrowHistory';

const selectList: SelectType[] = [
  { key: 'emptyHistory', name: '비우기 이력' },
  { key: 'throwHistory', name: '배출 이력' },
];

const MyHistoryScreen = () => {
  const [selected, setSelected] = useState<string>('emptyHistory');

  const onPress = (key: string) => setSelected(key);

  // TODO: selected 에 따라 list 를 변경하도록 설정 -> api 호출 시 ActivityIndicator 나오도록 하여 자연스럽게 처리

  return (
    <Screen title="내 히스토리">
      <HeaderTabBar selectList={selectList} selectedKey={selected} onPress={onPress} />
      <EmptyHistory selected={selected === 'emptyHistory'} />
      <ThrowHistory selected={selected === 'throwHistory'} />
    </Screen>
  );
};

export default MyHistoryScreen;
