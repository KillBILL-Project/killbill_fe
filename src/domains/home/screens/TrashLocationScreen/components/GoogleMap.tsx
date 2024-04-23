import { Alert, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region, UrlTile } from 'react-native-maps';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { useRecoilValue } from 'recoil';
import { openSettings, PERMISSIONS, request } from 'react-native-permissions';
import marker from '../../../../../assets/icon/marker.png';
import { useTrashCanLocationQuery } from '../../../../../hooks/queries/trash/useTrashCanLocationQuery';
import TrashList from '../TrashList';
import RefetchByCurrentPoint from './RefetchByCurrentPoint';
import MyLocation from './MyLocation';
import { MapWrapper } from './TrashLocation.style';
import { selectedTrashType } from '../../../../../states';
import { isIOS } from '../../../../../utils/platform';
import { useDialog } from '../../../../../states/context/DialogContext';

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
  const { showConfirm } = useDialog();

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

  const requestLocationAuthorization = async () => {
    Geolocation.requestAuthorization(
      /* 권한 있을 때 */
      () => {
        handleMoveMyLocation();
      },
      /* 권한 없을 때 */
      async () => {
        const permission = isIOS
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

        const result = await request(permission);

        if (result === 'blocked') {
          // TODO 백드롭 연하게 하고, 등등 아 몰라 안드로이드 이동방법 알려주기
          showConfirm({
            alertMessage: '분리수거 로봇 위치를 찾기 위해서는 위치 접근 권한이 필요합니다.',
            confirmText: '설정',
            cancelText: '취소',
          }).then(() => {
            openSettings();
          });
        }
      },
    );
  };

  useEffect(() => {
    // 위치 권한 요청
    requestLocationAuthorization();
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
