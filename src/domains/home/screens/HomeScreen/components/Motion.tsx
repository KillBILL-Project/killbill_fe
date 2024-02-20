import React, { useLayoutEffect, useRef } from 'react';
import { ImageBackground, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import homeBackground from '../../../../../assets/image/home_background.png';
import trashMotion from '../../../../../assets/lottie/trash_motion.json';

const Motion = () => {
  const motionRef = useRef<LottieView>(null);

  useLayoutEffect(() => {
    motionRef.current?.play();
  }, [motionRef]);

  return (
    <ImageBackground source={homeBackground}>
      <LottieView
        ref={motionRef}
        source={trashMotion}
        loop={false}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
        renderMode="AUTOMATIC"
      />
      <TouchableOpacity
        onPress={() => motionRef.current?.play()}
        style={{
          position: 'absolute',
          bottom: 13,
          left: 32,
          backgroundColor: '#fff',
          width: 61,
          height: 32,
          justifyContent: 'center',
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 16,
        }}
      >
        <Text>비우기</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Motion;
