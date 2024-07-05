import React, { useState } from 'react';
import Screen from '@components/Screen';
import CategoryTab, { CategoryType } from '@components/CategoryTab';
import { toString } from 'lodash';
import ThrowHistory from './ThrowHistory';
import EmptyHistory from './EmptyHistory';

type HistoryCategory = 'EMPTY' | 'THROW';

export interface MonthType {
  value: string;
  label: string;
}

const selectList: CategoryType<HistoryCategory>[] = [
  { category: 'EMPTY', name: '비우기 이력' },
  { category: 'THROW', name: '배출 이력' },
];

export const months: MonthType[] = Array.from({ length: 13 }, (_, i) =>
  i === 0
    ? { value: '-1', label: '전체' }
    : { value: i < 10 ? `0${i}` : toString(i), label: `${i}월` },
);

const MyHistoryScreen = () => {
  const [selected, setSelected] = useState<CategoryType<HistoryCategory>>(selectList[0]);

  const onPress = (key: CategoryType<HistoryCategory>) => {
    setSelected(prevState => {
      if (prevState === key) return prevState;
      return key;
    });
  };

  return (
    <Screen title="내 히스토리">
      <CategoryTab selectList={selectList} selected={selected} onPress={onPress} />
      <EmptyHistory selected={selected.category === 'EMPTY'} />
      <ThrowHistory selected={selected.category === 'THROW'} />
    </Screen>
  );
};

export default MyHistoryScreen;
