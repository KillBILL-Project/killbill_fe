import React from 'react';
import TrashType from './TrashType';
import { TrashTypeListWrapper } from './TrashLocation.style';

export type TTrashType =
  | 'PAPER'
  | 'CAN'
  | 'PLASTIC'
  | 'PET'
  | 'GLASS'
  | 'VINYL'
  | 'COMMON'
  | 'VASSEL'
  | null;

const TRASH_TYPE_LIST: { id: number; trashType: TTrashType | null; name: string }[] = [
  {
    id: 0,
    trashType: null,
    name: '전체검색',
  },
  {
    id: 1,
    trashType: 'CAN',
    name: '캔',
  },
  {
    id: 2,
    trashType: 'PLASTIC',
    name: '플라스틱',
  },
  {
    id: 3,
    trashType: 'PET',
    name: '페트병',
  },
  {
    id: 4,
    trashType: 'GLASS',
    name: '병',
  },
  {
    id: 5,
    trashType: 'VINYL',
    name: '비닐',
  },
  {
    id: 6,
    trashType: 'PAPER',
    name: '종이',
  },
  {
    id: 7,
    trashType: 'VASSEL',
    name: '빈용기',
  },
  {
    id: 8,
    trashType: 'COMMON',
    name: '기타',
  },
];

const TrashTypeList = () => {
  return (
    <TrashTypeListWrapper
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingRight: 20 }}
    >
      {TRASH_TYPE_LIST.map(trash => {
        const { trashType, id, name } = trash;
        return <TrashType key={id} trashType={trashType} name={name} />;
      })}
    </TrashTypeListWrapper>
  );
};

export default TrashTypeList;
