import { ITrashCanLocation } from '@services/api/trashService';
import React, { RefObject, useMemo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useRecoilState } from 'recoil';
import { selectedLocationState } from '@states/trash';
import { Image } from 'react-native';
import selectedMarker from '@assets/icon/selectedMarker.png';
import marker from '@assets/icon/marker.png';
import { scale } from '@utils/platform';

const LocationMarker = ({
  item,
  mapViewRef,
}: {
  item: ITrashCanLocation;
  mapViewRef: RefObject<MapView>;
}) => {
  const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState);

  const isSelected = useMemo(() => {
    return selectedLocation?.trashCanId === item.trashCanId;
  }, [item.trashCanId, selectedLocation]);

  return (
    <Marker
      key={item.trashCanId}
      onSelect={event => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        mapViewRef.current?.animateCamera({ center: { latitude, longitude } }, { duration: 200 });
        setSelectedLocation(item);
      }}
      onDeselect={() => {
        setSelectedLocation(null);
      }}
      coordinate={{ latitude: item.lat, longitude: item.lng }}
    >
      <Image source={isSelected ? selectedMarker : marker} width={scale(43)} height={scale(36)} />
    </Marker>
  );
};

export default LocationMarker;
