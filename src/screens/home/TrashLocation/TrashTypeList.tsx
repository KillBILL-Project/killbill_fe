import React from 'react';
import { TRASH_TYPE_LIST } from '@constants/trash';
import TrashType from './TrashType';
import { TrashTypeListWrapper } from './TrashLocation.style';

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
