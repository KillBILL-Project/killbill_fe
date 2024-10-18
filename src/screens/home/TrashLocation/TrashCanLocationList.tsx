import React, { RefObject, useCallback } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ITrashCanLocation } from '@services/api/trashService';
import MapView from 'react-native-maps';
import { useSetRecoilState } from 'recoil';
import { selectedLocationState } from '@states/trash';
import { TrashCanListWrapper } from './TrashLocation.style';
import TrashCanLocation from './TrashCanLocation';

interface TrashCanLocationListProps {
  trashInfoList?: ITrashCanLocation[] | null;
  mapViewRef: RefObject<MapView>;
}

const TrashCanLocationList = ({ trashInfoList, mapViewRef }: TrashCanLocationListProps) => {
  const setSelectedLocation = useSetRecoilState(selectedLocationState);

  const handleLocationPress = useCallback((trashCan: ITrashCanLocation) => {
    mapViewRef.current?.animateCamera(
      { center: { latitude: trashCan.lat, longitude: trashCan.lng } },
      { duration: 200 },
    );

    setSelectedLocation(trashCan);
  }, []);

  return (
    <TrashCanListWrapper>
      <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 0, gap: 20 }}>
        {trashInfoList?.map(trash => {
          return (
            <TrashCanLocation
              trashInfo={trash}
              key={trash.trashCanId}
              onPress={handleLocationPress}
            />
          );
        })}
      </ScrollView>
    </TrashCanListWrapper>
  );
};

export default TrashCanLocationList;
