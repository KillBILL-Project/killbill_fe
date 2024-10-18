import { ITrashCanLocation } from '@services/api/trashService';
import React from 'react';
import { TrashCanLocationText, TrashCanLocationWrapper } from './TrashLocation.style';

interface TrashCanLocationProps {
  trashInfo: ITrashCanLocation;
  onPress: (trashCan: ITrashCanLocation) => void;
}

const TrashCanLocation = ({ trashInfo, onPress }: TrashCanLocationProps) => {
  return (
    <TrashCanLocationWrapper onPress={() => onPress(trashInfo)}>
      <TrashCanLocationText>{trashInfo.placeName}</TrashCanLocationText>
    </TrashCanLocationWrapper>
  );
};

export default TrashCanLocation;
