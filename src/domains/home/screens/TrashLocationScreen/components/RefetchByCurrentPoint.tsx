import { Text, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { SearchPosition, SearchText, Wrapper } from './TrashLocation.style';

interface IRefetch {
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<AxiosResponse<any, any>, Error>>;
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
