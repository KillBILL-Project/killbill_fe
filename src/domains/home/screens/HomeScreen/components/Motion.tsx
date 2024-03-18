import React, { useLayoutEffect } from 'react';
import { ImageBackground, TouchableOpacity, Text, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import homeBackground from '../../../../../assets/image/home_background.png';
import trashMotion from '../../../../../assets/lottie/trash_motion.json';

const Motion = ({ motionRef }: any) => {
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
        onPress={() => Alert.alert('개발 중입니다.')}
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
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#E5E5EA',
        }}
      >
        <Text>비우기</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Motion;
