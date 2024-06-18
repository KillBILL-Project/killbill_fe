import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import { MAIN } from '../../../../../../constants/colors';
import { trashSizeMeta } from '../TrashSizeFilter/TrashSizeFilter';
import {
  COMMON_CIRCLE_SIZE,
  FIRST_CIRCLE_SIZE,
  SECOND_CIRCLE_SIZE,
  THIRD_CIRCLE_SIZE,
  TrashCategoryProps,
} from '../../../../../../types/home';
import { styles } from './TrashCategory.style';
import { Gesture } from 'react-native-gesture-handler';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const TrashCategory = ({
  index,
  selectedIndex,
  image,
  trashSize = 2,
  changeX,
}: TrashCategoryProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));

  const firstCircleAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      selectedIndex.value,
      [index - 1, index, index + 1],
      ['#F3F3F3', '#00000050', '#F3F3F3'],
    );
    const size = interpolate(
      selectedIndex.value,
      [index - 1, index, index + 1],
      [COMMON_CIRCLE_SIZE, FIRST_CIRCLE_SIZE, COMMON_CIRCLE_SIZE],
      Extrapolation.CLAMP,
    );
    const colorValue = withTiming(color, { duration: 200 });
    const sizeValue = withTiming(size, { duration: 200 });

    return {
      backgroundColor: colorValue,
      width: sizeValue,
      height: sizeValue,
    };
  });

  const secondCircleAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      selectedIndex.value,
      [index - 1, index, index + 1],
      ['#F3F3F3', '#00000030', '#F3F3F3'],
    );
    const w = interpolate(
      selectedIndex.value,
      [index - 1, index, index + 1],
      [COMMON_CIRCLE_SIZE, SECOND_CIRCLE_SIZE, COMMON_CIRCLE_SIZE],
      Extrapolation.CLAMP,
    );
    const colorValue = withTiming(color, { duration: 200 });
    const sizeValue = withTiming(w, { duration: 200 });

    return {
      backgroundColor: colorValue,
      width: sizeValue,
      height: sizeValue,
    };
  });

  const thirdCircleAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      selectedIndex.value,
      [index - 1, index, index + 1],
      ['#F3F3F3', MAIN, '#F3F3F3'],
    );
    const w = interpolate(
      selectedIndex.value,
      [index - 1, index, index + 1],
      [COMMON_CIRCLE_SIZE, THIRD_CIRCLE_SIZE, COMMON_CIRCLE_SIZE],
      Extrapolation.CLAMP,
    );
    const colorValue = withTiming(color, { duration: 200 });
    const wValue = withTiming(w, { duration: 200 });

    return {
      backgroundColor: colorValue,
      width: wValue,
      height: wValue,
    };
  });

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const { size } = trashSizeMeta[trashSize];
    const imageSize = interpolate(
      selectedIndex.value,
      [index - 1, index, index + 1],
      [size, size + 15, size],
      Extrapolation.CLAMP,
    );
    const sizeValue = withTiming(imageSize, { duration: 200 });

    return {
      width: sizeValue,
      height: sizeValue,
    };
  });

  return (
    <Animated.View style={[styles.circle, firstCircleAnimatedStyle]}>
      <Animated.View style={[styles.circle, secondCircleAnimatedStyle]}>
        <Animated.View style={[styles.circle, thirdCircleAnimatedStyle]}>
          <Animated.View style={[imageAnimatedStyle]}>
            <AnimatedFastImage
              style={[styles.fastImage, panAnimatedStyles]}
              source={{
                uri: image,
                priority: FastImage.priority.high,
              }}
              resizeMode="contain"
            />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default TrashCategory;
