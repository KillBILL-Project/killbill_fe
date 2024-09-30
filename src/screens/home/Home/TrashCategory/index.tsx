import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  SECOND_CIRCLE_SIZE,
  SELECTED_CIRCLE_SIZE,
  THIRD_CIRCLE_SIZE,
  TrashCategoryProps,
} from '@screens/home/Home/constant';
import { Image, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { styles } from './styles';

const TrashCategory = ({
  index,
  selectedIndex,
  image,
  text,
  isHorizontal,
  parentPanGesture,
  playMotion,
  throwTrash,
  changeIndex,
}: TrashCategoryProps) => {
  const itemCircleAnimatedStyle = useAnimatedStyle(() => {
    const iSize = interpolate(
      selectedIndex.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [
        THIRD_CIRCLE_SIZE,
        SECOND_CIRCLE_SIZE,
        SELECTED_CIRCLE_SIZE,
        SECOND_CIRCLE_SIZE,
        THIRD_CIRCLE_SIZE,
      ],
      Extrapolation.CLAMP,
    );
    const size = withTiming(iSize, { duration: 100 });

    return {
      width: size,
      height: size,
    };
  });

  const categoryTextAnimatedStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      selectedIndex.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [10, 12, 16, 12, 10],
      Extrapolation.CLAMP,
    );

    const lineHeight = interpolate(
      selectedIndex.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [14, 18, 24, 18, 14],
      Extrapolation.CLAMP,
    );

    const r = interpolate(
      selectedIndex.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [199, 118, 175, 118, 199],
      Extrapolation.CLAMP,
    );

    const g = interpolate(
      selectedIndex.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [199, 118, 252, 118, 199],
      Extrapolation.CLAMP,
    );

    const b = interpolate(
      selectedIndex.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [204, 118, 65, 118, 204],
      Extrapolation.CLAMP,
    );

    return {
      fontSize,
      lineHeight,
      color: `rgb(${r},${g},${b})`,
    };
  });

  const selectedAnimatedStyle = useAnimatedStyle(() => ({
    display: index === selectedIndex.value ? 'flex' : 'none',
  }));

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const isVisible = useSharedValue(false);
  const isOpened = useSharedValue(false);

  const pan = Gesture.Pan()
    .simultaneousWithExternalGesture(parentPanGesture)
    .onChange(event => {
      if (!isHorizontal.value) {
        isVisible.value = true;
        positionX.value += event.changeX;
        positionY.value += event.changeY;
        if (!isOpened.value && -event.translationY >= SELECTED_CIRCLE_SIZE) {
          isOpened.value = true;
          runOnJS(playMotion.open)();
        }
        if (isOpened.value && -event.translationY < SELECTED_CIRCLE_SIZE) {
          isOpened.value = false;
          runOnJS(playMotion.close)();
        }
      }
    })
    .onFinalize(() => {
      isOpened.value = false;
      isVisible.value = false;
      positionX.value = 0;
      positionY.value = 0;
    })
    .onTouchesUp(() => {
      if (isOpened.value) {
        runOnJS(throwTrash)(index);
      }
    });

  const categoryImageAnimatedStyle = useAnimatedStyle(() => ({
    display: isVisible.value ? 'flex' : 'none',
    transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
  }));

  const handleCategoryPress = (long?: boolean) => {
    if (index === selectedIndex.value) throwTrash(index, long);
    else changeIndex();
  };

  return (
    <GestureDetector gesture={pan}>
      <TouchableOpacity activeOpacity={0.85} onPress={() => handleCategoryPress(true)}>
        <Animated.View style={[styles.eachItemCircle, itemCircleAnimatedStyle]}>
          <Animated.View style={[styles.outerCircle, selectedAnimatedStyle]}>
            <View style={styles.middleCircle}>
              <View style={styles.innerCircle} />
            </View>
          </Animated.View>
          <View style={styles.virtualCircle}>
            <Image source={image} resizeMode="contain" style={styles.fixedCategoryImage} />
            <Animated.Image
              source={image}
              resizeMode="contain"
              style={[styles.animatedCategoryImage, categoryImageAnimatedStyle]}
            />
            <View style={styles.categoryTextView}>
              <Animated.Text style={[styles.categoryText, categoryTextAnimatedStyle]}>
                {text}
              </Animated.Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </GestureDetector>
  );
};

export default TrashCategory;
