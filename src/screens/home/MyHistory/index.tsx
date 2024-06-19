import React, { useState } from 'react';
import Screen from '@components/Screen';
import CategoryTab, { CategoryType } from '@components/CategoryTab';
import EmptyHistory from './EmptyHistory';
import ThrowHistory from './ThrowHistory';

type HistoryCategory = 'EMPTY' | 'THROW';

const selectList: CategoryType<HistoryCategory>[] = [
  { category: 'EMPTY', name: '비우기 이력' },
  { category: 'THROW', name: '배출 이력' },
];

const MyHistoryScreen = () => {
  const [selected, setSelected] = useState<CategoryType<HistoryCategory>>({
    category: 'EMPTY',
    name: '비우기 이력',
  });

  const onPress = (key: CategoryType<HistoryCategory>) => setSelected(key);

  return (
    <Screen title="내 히스토리">
      <CategoryTab selectList={selectList} selected={selected} onPress={onPress} />
      <EmptyHistory selected={selected.category === 'EMPTY'} />
      <ThrowHistory selected={selected.category === 'THROW'} />
    </Screen>
  );
};

export default MyHistoryScreen;
