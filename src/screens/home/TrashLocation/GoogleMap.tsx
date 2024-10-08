import { Alert, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region, UrlTile } from 'react-native-maps';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { openSettings, PERMISSIONS, request } from 'react-native-permissions';
import marker from '@assets/icon/marker.png';
import selectedMarker from '@assets/icon/selectedMarker.png';
import { useTrashCanLocationQuery } from '@hooks/queries/trash/useTrashCanLocationQuery';
import { activeTrashCanDetail, selectedTrashType } from '@states/trash';
import { isIOS, scale } from '@utils/platform';
import { ITrashCanLocation } from '@services/api/trashService';
import useConfirm from '@hooks/useConfirm';
import TrashList from './TrashList';
import RefetchByCurrentPoint from './RefetchByCurrentPoint';
import MyLocation from './MyLocation';
import { MapWrapper } from './TrashLocation.style';
import TrashCanDetail from './TrashCanDetail';

const URL_TEMPLATE = 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png';

interface ILocation {
  latitude: number;
  longitude: number;
}

const EARTH_RADIUS = 6371;

let location: ILocation | undefined;

const GoogleMap = () => {
  const [activeDetail, setTrashCanDetail] = useRecoilState(activeTrashCanDetail);
  const trashType = useRecoilValue(selectedTrashType);
  const mapViewRef = useRef<MapView>(null);
  const [distanceToTop, setDistanceToTop] = useState(0);
  const { showConfirm, Confirm } = useConfirm();

  const { data, refetch } = useTrashCanLocationQuery({
    lat: location?.latitude,
    lng: location?.longitude,
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

  const requestLocationAuthorization = useCallback(async () => {
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
          showConfirm({
            content: `분리수거 로봇 위치를 찾기 위해서는 위치 접근 권한이 필요합니다.`,
            confirmAction: openSettings,
          });
        }
      },
    );
  }, []);

  const blurTrashCanDetail = useCallback(() => {
    setTrashCanDetail(null);
  }, []);

  const pressMark = useCallback((trashCan: ITrashCanLocation) => {
    const { lng, lat } = trashCan;
    setTrashCanDetail(trashCan);
    mapViewRef.current?.setCamera({
      center: { latitude: lat, longitude: lng },
    });
  }, []);

  useEffect(() => {
    // 위치 권한 요청
    requestLocationAuthorization();
  }, []);

  useEffect(() => {
    if (!location) return;
    refetch();
  }, [trashType]);

  return (
    <>
      <Confirm />
      <MapWrapper activeOpacity={1} onPress={blurTrashCanDetail}>
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
            location = region;
            calculateDistanceToTop(region);
          }}
          initialRegion={{
            latitude: 37.4788,
            longitude: 127.012,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0221,
          }}
        >
          <UrlTile maximumZ={19} flipY={false} zIndex={1} urlTemplate={URL_TEMPLATE} />
          {data?.map((item: ITrashCanLocation) => {
            const isSelected = item.trashCanId === activeDetail?.trashCanId;
            return (
              <Marker
                onPress={() => pressMark(item)}
                key={item.trashCanId}
                coordinate={{ latitude: item.lat, longitude: item.lng }}
              >
                <Image
                  source={isSelected ? selectedMarker : marker}
                  width={scale(43)}
                  height={scale(36)}
                />
              </Marker>
            );
          })}
        </MapView>
        <RefetchByCurrentPoint refetch={refetch} />
        <MyLocation handleMoveMyLocation={handleMoveMyLocation} />
      </MapWrapper>
      {activeDetail ? <TrashCanDetail /> : <TrashList trashInfoList={data} />}
    </>
  );
};

export default GoogleMap;
