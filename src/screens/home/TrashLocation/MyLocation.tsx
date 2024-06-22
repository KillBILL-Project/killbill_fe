import { Image } from 'react-native';
import React, { memo } from 'react';
import moveMyLocationIcon from '@assets/icon/move_my_location.png';
import { MyPosition, PositionWrapper } from './TrashLocation.style';

interface IMyLocation {
  handleMoveMyLocation: () => void;
}

const MyLocation = ({ handleMoveMyLocation }: IMyLocation) => {
  return (
    <PositionWrapper>
      <MyPosition onPress={handleMoveMyLocation}>
        <Image source={moveMyLocationIcon} style={{ height: 40, width: 40 }} />
      </MyPosition>
    </PositionWrapper>
  );
};

export default memo(MyLocation);
