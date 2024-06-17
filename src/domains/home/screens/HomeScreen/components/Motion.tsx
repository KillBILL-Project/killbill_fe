import React, { RefObject, useLayoutEffect } from 'react';
import { ImageBackground, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import homeBackground from '../../../../../assets/image/home_background.png';
import trashMotion from '../../../../../assets/lottie/trash_motion.json';
import { useDialog } from '../../../../../states/context/DialogContext';
import { HomeParamList } from '../../../../../types/navigation';
import TrashCount from './TrashCount';
import useTrashCanContentsCount from '../../../../../hooks/queries/trash/useTrashCanContentsCount';

const Motion = ({ motionRef }: { motionRef: RefObject<LottieView> }) => {
  const { showConfirm } = useDialog();
  const { data: count } = useTrashCanContentsCount();

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
      <TrashCount count={count} />
      <TouchableOpacity
        onPress={handleEmptyTrash}
        style={{
          position: 'absolute',
          bottom: 13,
          left: 32,
          backgroundColor: '#fff',
          width: 75,
          height: 32,
          justifyContent: 'center',
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 16,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#E5E5EA',
          alignItems: 'center',
        }}
      >
        <Text>비우기</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Motion;
