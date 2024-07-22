import React from 'react';
import LottieView from 'lottie-react-native';
import spinner from '@assets/lottie/spinner.json';
import { scale } from '@utils/platform';

const Spinner = () => {
  return (
    <LottieView
      source={spinner}
      renderMode="AUTOMATIC"
      autoPlay
      loop
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: scale(200),
        height: scale(200),
        top: '40%',
        zIndex: 10001,
      }}
    />
  );
};

export default Spinner;
