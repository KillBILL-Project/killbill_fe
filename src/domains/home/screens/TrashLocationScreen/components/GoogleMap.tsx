import { Alert, Image, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region, UrlTile } from 'react-native-maps';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import marker from '../../../../../assets/icon/marker.png';
import { useTrashCanLocationQuery } from '../../../../../hooks/queries/trash/useTrashCanLocationQuery';
import TrashList from '../TrashList';
import RefetchByCurrentPoint from './RefetchByCurrentPoint';
import MyLocation from './MyLocation';
import { MapWrapper } from './TrashLocation.style';
import { useRecoilValue } from 'recoil';
import { selectedTrashType } from '../../../../../states';

const URL_TEMPLATE = 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png';

interface ILocation {
  latitude: number;
  longitude: number;
}

const EARTH_RADIUS = 6371;

const GoogleMap = () => {
  const trashType = useRecoilValue(selectedTrashType);
  const mapViewRef = useRef<MapView>(null);
  const [mapRegion, setMapRegion] = useState<ILocation | undefined>(undefined);
  const [distanceToTop, setDistanceToTop] = useState(0);

  const { data, refetch } = useTrashCanLocationQuery({
    lat: mapRegion?.latitude,
    lng: mapRegion?.longitude,
    distance: distanceToTop,
    trashType,
  });

  const calculateDistanceToTop = useCallback((region: Region) => {
    if (!region) return;

    const topLatitude = region.latitude + region.latitudeDelta / 2;
    const latDifferenceInRadians = (topLatitude - region.latitude) * (Math.PI / 180);
    const distanceInKm = EARTH_RADIUS * latDifferenceInRadians;
    setDistanceToTop(distanceInKm);
  }, []);

  const handleMoveMyLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      (position: { coords: ILocation }) => {
        const { latitude, longitude } = position.coords;

        mapViewRef.current?.setCamera({
          center: { latitude, longitude },
        });
      },
      (error: { message: string }) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  useEffect(() => {
    // 위치 권한 요청
    Geolocation.requestAuthorization(
      () => {
        handleMoveMyLocation();
      },
      () => {},
    );
  }, []);

  useEffect(() => {
    refetch();
  }, [trashType]);

  return (
    <>
      <MapWrapper>
        <MapView
          ref={mapViewRef}
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton={false}
          loadingEnabled
          showsBuildings
          showsIndoors
          mapType="standard"
          onRegionChangeComplete={region => {
            setMapRegion(region);
            calculateDistanceToTop(region);
          }}
        >
          <UrlTile maximumZ={19} flipY={false} zIndex={1} urlTemplate={URL_TEMPLATE} />
          {data?.data?.data?.map((item: { lat: number; lng: number; trashCanId: string }) => (
            <Marker key={item.trashCanId} coordinate={{ latitude: item.lat, longitude: item.lng }}>
              <Image source={marker} />
            </Marker>
          ))}
        </MapView>
        <RefetchByCurrentPoint refetch={refetch} />
        <MyLocation handleMoveMyLocation={handleMoveMyLocation} />
      </MapWrapper>
      <TrashList data={data?.data?.data} />
    </>
  );
};

export default GoogleMap;
