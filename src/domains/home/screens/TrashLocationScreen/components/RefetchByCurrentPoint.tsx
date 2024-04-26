import React, { memo } from 'react';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { SearchPosition, SearchText, Wrapper } from './TrashLocation.style';
import { ITrashCanLocation } from '../../../../../services/api/trashService';

interface IRefetch {
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<ITrashCanLocation[], Error>>;
}

const RefetchByCurrentPoint = ({ refetch }: IRefetch) => {
  return (
    <Wrapper top={10}>
      <SearchPosition onPress={() => refetch()}>
        <SearchText>현 위치에서 검색</SearchText>
      </SearchPosition>
    </Wrapper>
  );
};

export default memo(RefetchByCurrentPoint);
