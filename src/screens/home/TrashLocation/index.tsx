import React, { useCallback, useEffect, useRef } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import notification from '@assets/icon/notification.png';
import { MyPageParamList } from '@type/navigation';
import Screen from '@components/Screen';
import { Overlay, RelativeWrapper } from '@screens/home/TrashLocation/TrashLocation.style';
import RefetchByCurrentPoint from '@screens/home/TrashLocation/RefetchByCurrentPoint';
import MyLocation from '@screens/home/TrashLocation/MyLocation';
import TrashLocationBottomSheet from '@screens/home/TrashLocation/TrashLocationBottomSheet';
import { useTrashCanLocationQuery } from '@hooks/queries/trash/useTrashCanLocationQuery';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Region } from 'react-native-maps';
import { isIOS, scale } from '@utils/platform';
import { useSetRecoilState } from 'recoil';
import { currentCoordinatesState, selectedLocationState } from '@states/trash';
import { openSettings, PERMISSIONS, request } from 'react-native-permissions';
import useConfirm from '@hooks/useConfirm';
import GoogleMap from './GoogleMap';
import TrashTypeList from './TrashTypeList';

interface ILocation {
  latitude: number;
  longitude: number;
}

const TrashLocationScreen = () => {
  const { showConfirm, Confirm } = useConfirm();
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();

  const mapViewRef = useRef<MapView>(null);
  const setSelectedLocation = useSetRecoilState(selectedLocationState);
  const setCurrentCoordinates = useSetRecoilState(currentCoordinatesState);
  const { data, refetch } = useTrashCanLocationQuery();

  const handleHeaderRightButton = () => {
    navigate('Notification');
  };

  const refetchLocationList = () => {
    refetch();
    setCurrentCoordinates(prev => ({ ...prev, locationChanged: false }));
    setSelectedLocation(null);
  };

  const handleMoveMyLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      (position: { coords: ILocation }) => {
        const { latitude, longitude } = position.coords;
        mapViewRef.current?.setCamera({
          center: { latitude, longitude },
        });
      },
      () => {
        showConfirm({
          content: `현재 위치를 사용해 주변 정보를 제공하기 위해 위치 접근 권한이 필요합니다.`,
          confirmAction: openSettings,
          confirmText: '설정',
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  const calculateDistanceToTop = useCallback((region: Region) => {
    const { latitude, longitude, latitudeDelta } = region;
    setCurrentCoordinates({ latitude, longitude, latitudeDelta, locationChanged: true });
  }, []);

  const requestLocationAuthorization = useCallback(() => {
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

  useEffect(() => {
    // 위치 권한 요청
    requestLocationAuthorization();
    setTimeout(() => refetchLocationList(), 500);
  }, []);

  const rightButtonProps = {
    icon: notification,
    padding: scale(24),
    size: scale(24),
    onPress: handleHeaderRightButton,
  };

  return (
    <Screen title="쓰레기 위치" isBackButtonShown={false} rightButtonProps={rightButtonProps}>
      <Confirm />
      <GoogleMap
        mapViewRef={mapViewRef}
        data={data}
        calculateDistanceToTop={calculateDistanceToTop}
      />
      <Overlay pointerEvents="box-none">
        <TrashTypeList />
        <RelativeWrapper>
          <RefetchByCurrentPoint refetch={refetchLocationList} />
          <MyLocation handleMoveMyLocation={handleMoveMyLocation} />
        </RelativeWrapper>
      </Overlay>
      <TrashLocationBottomSheet trashCanLocationList={data} mapViewRef={mapViewRef} />
    </Screen>
  );
};

export default TrashLocationScreen;
