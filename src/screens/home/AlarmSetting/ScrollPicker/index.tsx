import React, { useEffect, useState } from 'react';
import { TextStyle, View } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { indexOf } from 'lodash';
import { ITEM_HEIGHT } from '@screens/home/AlarmSetting/constant';
import { styles } from '@screens/home/AlarmSetting/ScrollPicker/styles';
import ScrollItem from '@screens/home/AlarmSetting/ScrollPicker/ScrollItem';

interface ScrollPickerProps {
  itemList: string[];
  value?: string;
  setValue: (value: any) => void;
  fontStyle: TextStyle;
}

const ScrollPicker = ({ itemList, value, setValue, fontStyle }: ScrollPickerProps) => {
  const items = ['', ...itemList, ''];

  const [isScroll, setIsScroll] = useState(false);
  const offsetY = useSharedValue(value ? indexOf(itemList, value) * -ITEM_HEIGHT : 0);

  const selectedIndex = useDerivedValue<number>(() => {
    let index = -Math.round(offsetY.value / ITEM_HEIGHT);
    if (index < 0) index = 0;
    if (index >= itemList.length) index = itemList.length - 1;
    return index;
  });

  const pan = Gesture.Pan()
    .onChange(event => {
      runOnJS(setIsScroll)(true);
      if (offsetY.value > 0) return;
      offsetY.value += event.changeY;
    })
    .onFinalize(event => {
      offsetY.value = withDecay(
        {
          velocity: event.velocityY,
          deceleration: 0.994,
          rubberBandEffect: false,
          clamp: [-ITEM_HEIGHT * itemList.length, ITEM_HEIGHT],
        },
        () => {
          offsetY.value = withSpring(-selectedIndex.value * ITEM_HEIGHT, {
            mass: 0.5,
            damping: 10,
            velocity: 200,
          });
          runOnJS(setIsScroll)(false);
        },
      );
    });

  const scrollAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offsetY.value }],
  }));

  useEffect(() => {
    setValue(itemList[selectedIndex.value]);
  }, [isScroll]);

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pan}>
        <Animated.View style={scrollAnimatedStyle}>
          {items.map((item, index) => {
            return (
              <ScrollItem
                item={item}
                index={index}
                selectedIndex={selectedIndex}
                fontStyle={fontStyle}
              />
            );
          })}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default ScrollPicker;
