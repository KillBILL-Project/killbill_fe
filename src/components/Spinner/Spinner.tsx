import React from 'react';
import LottieView from 'lottie-react-native';
import spinner from '../../assets/lottie/spinner.json';
import { ratio } from '../../utils/platform';

const Spinner = () => {
  // return <ActivityIndicator size="large" color={PRIMARY} />;
  return (
    <LottieView
      source={spinner}
      renderMode="AUTOMATIC"
      autoPlay
      loop
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: ratio * 200,
        height: ratio * 200,
        top: '40%',
        zIndex: 10001,
      }}
    />
  );
};

export default Spinner;
