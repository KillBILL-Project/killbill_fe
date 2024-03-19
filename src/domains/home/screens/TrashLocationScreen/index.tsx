import React, { useEffect, useRef, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Screen from '../../../../components/Screen/Screen';
import notification from '../../../../assets/icon/notification.png';
import { MyPageParamList } from '../../../../types/navigation';
import myLocationIcon from '../../../../assets/icon/my_location.png';
import moveMyLocationIcon from '../../../../assets/icon/move_my_location.png';

const TrashLocationScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();

  const [region, setRegion] = useState<any>(null);
  const mapViewRef = useRef<MapView>(null);

  const onPressNotification = () => {
    navigate('Notification');
  };

  const rightButtonProps = {
    icon: notification,
    padding: 24,
    size: 24,
    onPress: onPressNotification,
  };

  useEffect(() => {
    // 위치 권한 요청
    Geolocation.requestAuthorization(
      () => {},
      () => {},
    );

    // 위치 가져오기
    Geolocation.getCurrentPosition(
      (position: { coords: any }) => {
        const { latitude, longitude }: any = position.coords;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error: { message: string }) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  return (
    <Screen title="쓰레기 위치" isBackButtonShown={false} rightButtonProps={rightButtonProps}>
      <View style={{ flexDirection: 'row', gap: 8, paddingHorizontal: 24, paddingVertical: 12 }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            backgroundColor: '#AFFC41',
            borderWidth: 1,
            borderColor: '#AFFC41',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#241023', lineHeight: 21 }}>
            전체
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            종이
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            캔
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            유리
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: '#F0F1F4',
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#767676', lineHeight: 21 }}>
            기타
          </Text>
        </TouchableOpacity>
      </View>
      <MapView ref={mapViewRef} style={{ flex: 1 }} region={region}>
        <TouchableOpacity
          style={{ position: 'absolute', top: 39, right: 24 }}
          onPress={() =>
            mapViewRef?.current?.setCamera({
              center: { latitude: region.latitude, longitude: region.longitude },
            })
          }
        >
          <Image source={moveMyLocationIcon} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <Marker coordinate={region}>
          <Image source={myLocationIcon} style={{ height: 16, width: 16 }} />
        </Marker>
      </MapView>
    </Screen>
  );
};

export default TrashLocationScreen;
