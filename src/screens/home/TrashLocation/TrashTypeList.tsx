import React from 'react';
import { TRASH_TYPE_LIST } from '@constants/trash';
import { scale } from '@utils/platform';
import TrashType from './TrashType';
import { TrashTypeListWrapper, TrashTypeScroll } from './TrashLocation.style';

const TrashTypeList = () => {
  return (
    <TrashTypeListWrapper>
      <TrashTypeScroll
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: scale(12),
          paddingHorizontal: scale(24),
          alignItems: 'center',
          gap: scale(8),
        }}
      >
        {TRASH_TYPE_LIST.map(trash => {
          const { trashType, id, name } = trash;
          return <TrashType key={id} trashType={trashType} name={name} />;
        })}
      </TrashTypeScroll>
    </TrashTypeListWrapper>
  );
};

export default TrashTypeList;
