import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { TextStyle, View } from 'react-native';
import { PRIMARY, WHITE } from '@constants/colors';
import React from 'react';
import { styles } from '@screens/home/AlarmSetting/ScrollPicker/styles';

const ScrollItem = ({
  item,
  index,
  selectedIndex,
  fontStyle,
}: {
  item: string;
  index: number;
  selectedIndex: SharedValue;
  fontStyle: TextStyle;
}) => {
  const a = useAnimatedStyle(() => {
    return {
      color: index - 1 === selectedIndex.value ? PRIMARY : WHITE,
    };
  });
  return (
    <View style={styles.item}>
      <Animated.Text style={[styles.itemText, fontStyle, a]}>{item}</Animated.Text>
    </View>
  );
};

export default ScrollItem;
