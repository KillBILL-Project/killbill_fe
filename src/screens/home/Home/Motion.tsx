import React, { RefObject, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import homeBackground from '@assets/image/home_background.png';
import trashMotion from '@assets/lottie/trash_motion.json';
import { useDialog } from '@states/context/DialogContext';
import { HomeParamList } from '@type/navigation';
import useTrashCanContentsCount from '@hooks/queries/trash/useTrashCanContentsCount';
import { scale } from '@utils/platform';
import { Regular14 } from '@components/Typography';
import { BLACK } from '@constants/colors';

const Motion = ({ motionRef }: { motionRef: RefObject<LottieView> }) => {
  const { showConfirm } = useDialog();
  const { data: count } = useTrashCanContentsCount();
  const [motionHeight, setMotionHeight] = useState(0);

  const { navigate } = useNavigation<NavigationProp<HomeParamList>>();

  const handleEmptyTrash = async () => {
    if (!count) {
      await showConfirm({
        alertMessage: '비울 쓰레기가 없습니다.',
        confirmText: '확인',
      });
      return;
    }

    await showConfirm({
      alertMessage: `지금부터 쓰레기를 비웁니다.${'\n'}정말 비우시겠습니까?`,
      confirmText: '비울게요',
    });

    navigate('EmptyTrash');
  };

  return (
    <ImageBackground
      source={homeBackground}
      style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}
    >
      <View
        style={{
          marginBottom: scale(16),
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <LottieView
          ref={motionRef}
          source={trashMotion}
          loop={false}
          resizeMode="contain"
          style={{ width: '150%', height: '100%', minHeight: scale(315) }}
          renderMode="AUTOMATIC"
          onLayout={event => {
            setMotionHeight(event.nativeEvent.layout.height);
          }}
        />
        {motionHeight !== 0 && (
          <View
            style={{
              bottom: motionHeight * 0.18,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: motionHeight * 0.08, fontWeight: '900' }}>5 개</Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={handleEmptyTrash}
        style={{
          position: 'absolute',
          paddingHorizontal: scale(12),
          paddingVertical: scale(6),
          bottom: scale(13),
          left: scale(18),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#E5E5EA',
          backgroundColor: '#fff',
        }}
      >
        <Regular14 color={BLACK}>비우기</Regular14>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Motion;
