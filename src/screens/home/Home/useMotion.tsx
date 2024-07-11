import React, { useCallback, useRef } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { width } from '@utils/platform';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { EmptyTrashButton, styles } from '@screens/home/Home/styles';
import useTrashCanContentsCount from '@hooks/queries/trash/useTrashCanContentsCount';
import homeBackground from '@assets/image/home_background.png';
import { Regular14 } from '@components/Typography';
import { BLACK } from '@constants/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeParamList } from '@type/navigation';
import { useDialog } from '@states/context/DialogContext';
import { motionArray } from '@screens/home/Home/constant';

const useMotion = () => {
  const { data: count } = useTrashCanContentsCount();
  const interval = useRef<NodeJS.Timeout | null>(null);

  const { navigate } = useNavigation<NavigationProp<HomeParamList>>();
  const { showConfirm } = useDialog();

  const motionIndex = useSharedValue(0);
  const countLocation = useSharedValue(0);

  const motionTranslateAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -width * motionIndex.value }],
  }));

  const countAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: countLocation.value }],
  }));

  const setCountLocation = useCallback(
    (w: number, h: number) => {
      const verticalRatio = 0.47;
      const horizontalRatio = 0.54;
      const ratio = 1.06;

      const imageRatio = 376 / 406;
      const viewRatio = w / h;
      const height = viewRatio >= imageRatio ? h * verticalRatio : (w * horizontalRatio) / ratio;
      countLocation.value = height * 0.48;
    },
    [countLocation],
  );

  const reset = useCallback(() => {
    motionIndex.value = 0;
    if (interval.current) clearInterval(interval.current);
  }, [motionIndex]);

  const play = useCallback(() => {
    if (interval.current) reset();
    interval.current = setInterval(() => {
      if (motionIndex.value < motionArray.length) {
        motionIndex.value += 1;
        return;
      }
      reset();
    }, 50);
  }, [reset, motionIndex]);

  const open = useCallback(() => {
    interval.current = setInterval(() => {
      if (motionIndex.value < motionArray.length / 2) motionIndex.value += 1;
    }, 50);
  }, [motionIndex]);

  const close = useCallback(() => {
    interval.current = setInterval(() => {
      if (motionIndex.value > 0) motionIndex.value -= 1;
    }, 50);
  }, [motionIndex]);

  const handleEmptyTrash = useCallback(async () => {
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
  }, [count, navigate, showConfirm]);

  const Motion = useCallback(() => {
    return (
      <ImageBackground source={homeBackground} style={styles.imageBackground}>
        <Animated.View style={[styles.imageRowContainer, motionTranslateAnimatedStyle]}>
          {motionArray.map((item, index) => (
            <View key={`motion${index}`} style={styles.eachImageContainer}>
              <Image source={item} style={styles.image} resizeMode="contain" />
            </View>
          ))}
        </Animated.View>
        <Animated.View style={styles.staticBinImage}>
          <Image
            source={motionArray[0]}
            style={styles.image}
            resizeMode="contain"
            onLayout={event => {
              setCountLocation(event.nativeEvent.layout.width, event.nativeEvent.layout.height);
            }}
          />
        </Animated.View>
        <View style={[styles.eachImageContainer, styles.trashCountContainer]}>
          <Animated.View style={[styles.trashCountBox, countAnimatedStyle]}>
            <Text style={styles.trashCountText}>{count == null ? '' : `${count}개`}</Text>
          </Animated.View>
        </View>
        <EmptyTrashButton onPress={handleEmptyTrash}>
          <Regular14 color={BLACK}>비우기</Regular14>
        </EmptyTrashButton>
      </ImageBackground>
    );
  }, [motionTranslateAnimatedStyle, countAnimatedStyle, count, handleEmptyTrash, setCountLocation]);

  return { Motion, play, reset, open, close };
};

export default useMotion;
