import React, { useCallback, useEffect } from 'react';
import { Modal, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ratio, scale } from '@utils/platform';
import { WHITE } from '@constants/colors';
import { styles } from '@components/DropdownFrame/styles';

export interface DropdownFrameProps {
  isActiveModal: boolean;
  setIsActiveModal: (params?: any) => void;
  dropDownWidth: number;
  dropDownHeight: number;
  children: React.ReactNode;
  offsetX: number;
  offsetY: number;
  containerStyle?: ViewStyle;
  backgroundColor?: string;
}

const DropdownFrame = ({
  isActiveModal,
  setIsActiveModal,
  dropDownWidth,
  dropDownHeight,
  children,
  offsetX,
  offsetY,
  containerStyle,
  backgroundColor = WHITE,
}: DropdownFrameProps) => {
  const dynamicStyles = StyleSheet.create({
    layoutContainer: {
      width: scale(dropDownWidth),
      height: scale(dropDownHeight),
      top: offsetY,
      left: offsetX,
    },
    body: { backgroundColor },
  });

  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const toggleDropDown = useCallback(() => {
    width.value = withTiming(!isActiveModal ? 0 : dropDownWidth, {
      duration: 200,
      easing: Easing.inOut(Easing.linear),
      reduceMotion: ReduceMotion.System,
    });
    height.value = withTiming(!isActiveModal ? 0 : dropDownHeight, {
      duration: 200,
      easing: Easing.inOut(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [dropDownHeight, dropDownWidth, height, isActiveModal, width]);

  const animatedDropDownStyle = useAnimatedStyle(() => ({
    width: width.value * ratio,
    height: height.value * ratio,
  }));

  useEffect(() => {
    toggleDropDown();
  }, [isActiveModal, toggleDropDown]);

  return (
    <Modal visible={isActiveModal} transparent statusBarTranslucent>
      <Pressable style={styles.backdrop} onPress={() => setIsActiveModal(false)}>
        <View style={[styles.layoutContainer, dynamicStyles.layoutContainer]}>
          <Animated.View style={[styles.container, animatedDropDownStyle, containerStyle]}>
            <View style={[styles.body, dynamicStyles.body]}>{children}</View>
          </Animated.View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default DropdownFrame;
