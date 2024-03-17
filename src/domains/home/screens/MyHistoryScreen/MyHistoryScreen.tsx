import React, { useRef, useState } from 'react';
import Screen from '../../../../components/Screen/Screen';
import CategoryTab from '../components/CategoryTab';
import EmptyHistory from './components/EmptyHistory';
import ThrowHistory from './components/ThrowHistory';
import { CategoryType } from '../components/CategoryTab/CategoryTab';

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

  // TODO: selected 에 따라 list 를 변경하도록 설정 -> api 호출 시 ActivityIndicator 나오도록 하여 자연스럽게 처리

  return (
    <Screen title="내 히스토리">
      <CategoryTab selectList={selectList} selected={selected} onPress={onPress} />
      <EmptyHistory selected={selected.category === 'EMPTY'} />
      <ThrowHistory selected={selected.category === 'THROW'} />
    </Screen>
  );
};

export default MyHistoryScreen;
