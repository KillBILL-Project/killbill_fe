import MapView, {
  Animated,
  AnimatedRegion,
  PROVIDER_GOOGLE,
  Region,
  UrlTile,
} from 'react-native-maps';
import React, { RefObject } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedLocationState } from '@states/trash';
import { ITrashCanLocation } from '@services/api/trashService';
import LocationMarker from '@screens/home/TrashLocation/LocationMarker';

interface GoogleMapProps {
  mapViewRef: RefObject<MapView>;
  data?: ITrashCanLocation[] | null;
  calculateDistanceToTop: (region: Region) => void;
}

const URL_TEMPLATE = 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png';

const GoogleMap = ({ mapViewRef, data, calculateDistanceToTop }: GoogleMapProps) => {
  const setSelectedLocation = useSetRecoilState(selectedLocationState);

  const animatedRegion = new AnimatedRegion({
    latitude: 37.5665851,
    longitude: 126.9782038,
    latitudeDelta: 0.0622,
    longitudeDelta: 0.0221,
  });

  return (
    <Animated
      ref={mapViewRef}
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton={false}
      loadingEnabled
      showsBuildings
      showsIndoors
      minZoomLevel={10}
      maxZoomLevel={19}
      mapType="standard"
      onRegionChangeComplete={region => {
        calculateDistanceToTop(region);
      }}
      onPress={() => {
        setSelectedLocation(null);
      }}
      region={animatedRegion}
      onRegionChange={region => {
        animatedRegion.setValue(region);
      }}
    >
      <UrlTile maximumZ={19} flipY={false} zIndex={1} urlTemplate={URL_TEMPLATE} />
      {data?.map((item: ITrashCanLocation) => {
        return <LocationMarker key={item.trashCanId} item={item} mapViewRef={mapViewRef} />;
      })}
    </Animated>
  );
};

export default GoogleMap;
