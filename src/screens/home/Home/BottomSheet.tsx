import React, { useEffect, useMemo, useState } from 'react';
import {
  AdjustingBar,
  AdjustingBarSection,
  BottomSheetContainer,
  ContentSection,
} from '@screens/home/Home/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { blankHeightState, bottomTabHeightState } from '@states/common';
import { styles } from '@constants/constants';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector, PanGesture } from 'react-native-gesture-handler';
import { hRatio, hScale, isIOS, windowHeight } from '@utils/platform';

const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  const { top, bottom } = useSafeAreaInsets();
  const bottomTabHeight = useRecoilValue(bottomTabHeightState);
  const setBlankHeight = useSetRecoilState(blankHeightState);
  const [adjustingBarHeight, setAdjustingBarHeight] = useState(0);

  const sharedInitialY = useSharedValue(0);
  const translateY = useSharedValue(0);

  const pan: PanGesture = Gesture.Pan()
    .onChange(event => {
      if (translateY.value < 0 || translateY.value > sharedInitialY.value) return;
      translateY.value += event.changeY;
    })
    .onFinalize(event => {
      let y = hRatio * 20;
      const aSeventhInitialY = Math.round(sharedInitialY.value / 7);

      if (event.velocityY > 0) {
        y = aSeventhInitialY < translateY.value ? sharedInitialY.value : y;
      } else {
        y = aSeventhInitialY * 6 > translateY.value ? y : sharedInitialY.value;
      }

      translateY.value = withSpring(y, {
        mass: 0.2,
        damping: 10,
        velocity: 200,
      });
    });

  const height = useMemo(() => {
    return isIOS
      ? windowHeight - top - bottomTabHeight
      : windowHeight - bottomTabHeight - top + bottom;
  }, [bottomTabHeight, top, bottom]);

  const titleHeight = hScale(36);
  const blank = useMemo(() => adjustingBarHeight + titleHeight, [adjustingBarHeight, titleHeight]);

  useEffect(() => {
    setBlankHeight(blank);
    translateY.value = height - blank;
    sharedInitialY.value = height - blank;
  }, [height, blank]);

  const animatedSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <BottomSheetContainer style={[styles.shadow, animatedSheetStyle, { top, height }]}>
      <GestureDetector gesture={pan}>
        <AdjustingBarSection
          onLayout={event => {
            setAdjustingBarHeight(event.nativeEvent.layout.height);
          }}
        >
          <AdjustingBar />
        </AdjustingBarSection>
      </GestureDetector>
      <ContentSection>{children}</ContentSection>
    </BottomSheetContainer>
  );
};

export default BottomSheet;
