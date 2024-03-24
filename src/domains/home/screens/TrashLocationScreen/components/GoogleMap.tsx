import { Image, TouchableOpacity } from 'react-native';
import moveMyLocationIcon from '../../../../../assets/icon/move_my_location.png';
import MapView, { Marker, PROVIDER_GOOGLE, UrlTile } from 'react-native-maps';
import myLocationIcon from '../../../../../assets/icon/my_location.png';
import React from 'react';

const URL_TEMPLATE = 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png';

const GoogleMap = () => {
  return (
    <>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        cacheEnabled
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
        region={{
          latitude: 37.59162086254019,
          longitude: 126.98785062349218,
          latitudeDelta: 0.0052,
          longitudeDelta: 0.0051,
        }}
      >
        <TouchableOpacity style={{ position: 'absolute', top: 39, right: 24 }}>
          <Image source={moveMyLocationIcon} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>

        <UrlTile maximumZ={19} flipY={false} zIndex={1} urlTemplate={URL_TEMPLATE} />
        <Marker coordinate={{ latitude: 0, longitude: 0 }}>
          <Image source={myLocationIcon} style={{ height: 16, width: 16 }} />
        </Marker>
      </MapView>
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
