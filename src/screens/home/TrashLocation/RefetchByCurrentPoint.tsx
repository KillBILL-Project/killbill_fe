import React, { memo } from 'react';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { ITrashCanLocation } from '@services/api/trashService';
import { SearchPosition, SearchText, Wrapper } from './TrashLocation.style';

interface IRefetch {
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<ITrashCanLocation[], Error>>;
}

const RefetchByCurrentPoint = ({ refetch }: IRefetch) => {
  return (
    <Wrapper top={10}>
      <SearchPosition onPress={() => refetch()}>
        <SearchText>현 지도에서 검색</SearchText>
      </SearchPosition>
    </Wrapper>
  );
};

export default memo(RefetchByCurrentPoint);
