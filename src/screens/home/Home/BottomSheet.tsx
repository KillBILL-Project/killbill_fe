import React, { useMemo, useState } from 'react';
import {
  AdjustingBar,
  AdjustingBarSection,
  GestureSection,
  ContentSection,
  GestureBar,
} from '@screens/home/Home/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import { screenHeightState } from '@states/common';
import { styles } from '@constants/constants';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector, PanGesture } from 'react-native-gesture-handler';

const BottomSheet = ({
  headerComponent,
  children,
}: {
  headerComponent?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const { top } = useSafeAreaInsets();
  const [gestureBarHeight, setGestureBarHeight] = useState(0);
  const screenHeight = useRecoilValue(screenHeightState);

  const contentHeight = useMemo(() => {
    return screenHeight - top;
  }, [screenHeight, top]);

  const translateY = useSharedValue(0);
  const animatedSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const pan: PanGesture = Gesture.Pan()
    .onChange(event => {
      translateY.value += event.changeY;
    })
    .onFinalize(event => {
      const y =
        event.velocityY < -1000 ||
        (Math.abs(event.velocityY) <= 1000 && event.absoluteY < screenHeight / 2)
          ? -contentHeight
          : 0;

      translateY.value = withSpring(y, {
        mass: 0.2,
        damping: 10,
        velocity: 200,
      });
    });
  return (
    <Animated.View style={[animatedSheetStyle, { position: 'relative' }]}>
      <GestureDetector gesture={pan}>
        <GestureSection style={[styles.shadow]}>
          <GestureBar
            onLayout={event => {
              setGestureBarHeight(event.nativeEvent.layout.height);
            }}
          >
            <AdjustingBarSection>
              <AdjustingBar />
            </AdjustingBarSection>
            {headerComponent}
          </GestureBar>
        </GestureSection>
      </GestureDetector>
      <ContentSection gestureBarHeight={gestureBarHeight} height={contentHeight}>
        {children}
      </ContentSection>
    </Animated.View>
  );
};

export default BottomSheet;
