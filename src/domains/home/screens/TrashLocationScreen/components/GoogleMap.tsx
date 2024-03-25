import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region, UrlTile } from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import myLocationIcon from '../../../../../assets/icon/my_location.png';
import marker from '../../../../../assets/icon/marker.png';
import moveMyLocationIcon from '../../../../../assets/icon/move_my_location.png';
import { useTrashCanLocationQuery } from '../../../../../hooks/queries/trash/useTrashCanLocationQuery';
import TrashList from '../TrashList';

const URL_TEMPLATE = 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png';

const GoogleMap = () => {
  const mapViewRef = useRef<MapView>(null);
  const [mapRegion, setMapRegion] = useState({ latitude: 0, longitude: 0 });
  const [distanceToTop, setDistanceToTop] = useState(0);

  const { data, refetch } = useTrashCanLocationQuery({
    lat: mapRegion.latitude,
    lng: mapRegion.longitude,
    distance: distanceToTop,
  });

  const calculateDistanceToTop = (region: Region) => {
    if (region) {
      const topLatitude = region.latitude + region.latitudeDelta / 2;
      const earthRadius = 6371; // 지구의 반지름(km)
      const latDifferenceInRadians = (topLatitude - region.latitude) * (Math.PI / 180);
      const distanceInKm = earthRadius * latDifferenceInRadians;
      setDistanceToTop(distanceInKm);

      console.log(distanceInKm);
    }
  };

  const handleMoveMyLocation = () => {
    Geolocation.getCurrentPosition(
      (position: { coords: any }) => {
        const { latitude, longitude }: any = position.coords;

        mapViewRef.current?.setCamera({
          center: { latitude, longitude },
        });
      },
      (error: { message: string }) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  useEffect(() => {
    // 위치 권한 요청
    Geolocation.requestAuthorization(
      () => {},
      () => {},
    );
  }, []);

  useEffect(() => {
    console.log(Config.API_URL);
    console.log(data?.data?.data);
  }, [data]);

  return (
    <>
      <MapView
        ref={mapViewRef}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        loadingEnabled
        showsBuildings
        showsIndoors
        mapType="standard"
        initialRegion={{
          latitude: 37.59162086254019,
          longitude: 126.98785062349218,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0221,
        }}
        onRegionChangeComplete={region => {
          setMapRegion(region);
          calculateDistanceToTop(region);
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              position: 'relative',
              top: 10,
              backgroundColor: '#fff',
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
              width: 120,
            }}
            onPress={() => refetch()}
          >
            <Text style={{ textAlign: 'center' }}>현 지도에서 검색</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ position: 'absolute', top: 39, right: 24 }}
          onPress={handleMoveMyLocation}
        >
          <Image source={moveMyLocationIcon} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>

        <UrlTile maximumZ={19} flipY={false} zIndex={1} urlTemplate={URL_TEMPLATE} />

        <Marker coordinate={{ latitude: 0, longitude: 0 }}>
          <Image source={myLocationIcon} style={{ height: 16, width: 16 }} />
        </Marker>
        {data?.data?.data?.map((item: { lat: number; lng: number; trashCanId: string }) => (
          <Marker key={item.trashCanId} coordinate={{ latitude: item.lat, longitude: item.lng }}>
            <Image source={marker} />
          </Marker>
        ))}
      </MapView>
      <TrashList data={data?.data?.data} />
    </>
  );
};

// const getGeoCode = (
//   location: LocationType | undefined,
//   setName: React.Dispatch<React.SetStateAction<string>>,
// ) => {
//   try {
//     if (!location) return;
//     const { latitude, longitude } = location;
//     const apiKey = Platform.select({
//       ios: Config.GOOGLE_MAPS_API_KEY_IOS,
//       android: Config.GOOGLE_MAPS_API_KEY_ANDROID,
//     });
//     const url = `${GEOCODE_PREFIX}=${latitude},${longitude}&key=${apiKey}&language=ko`;
//
//     axios
//       .get(url)
//       .then(response => {
//         const { data } = response;
//         setName(data.results[0].formatted_address);
//       })
//       .catch(error => {
//         throw new Error(`getGeoCode : ${error}`);
//       });
//   } catch (e) {
//     throw new Error(`getGeoCodding: ${e}`);
//   }
// };

export default GoogleMap;
