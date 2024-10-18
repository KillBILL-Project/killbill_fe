import React, { memo, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { currentCoordinatesState } from '@states/trash';
import { SearchPosition, SearchText, Wrapper } from './TrashLocation.style';

interface RefetchByCurrentCoordinatesProps {
  refetch: () => void;
}

const RefetchByCurrentCoordinates = ({ refetch }: RefetchByCurrentCoordinatesProps) => {
  const currentCoordinates = useRecoilValue(currentCoordinatesState);

  const handleSearchPositionButton = useCallback(() => {
    refetch();
  }, []);

  return (
    currentCoordinates.locationChanged && (
      <Wrapper>
        <SearchPosition onPress={handleSearchPositionButton}>
          <SearchText>현 지도에서 검색</SearchText>
        </SearchPosition>
      </Wrapper>
    )
  );
};

export default memo(RefetchByCurrentCoordinates);
