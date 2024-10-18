import React, { RefObject, useState } from 'react';
import { styles } from '@constants/constants';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, PanGesture } from 'react-native-gesture-handler';
import { ITrashCanLocation } from '@services/api/trashService';
import TrashCanLocationCountTitle from '@screens/home/TrashLocation/TrashCanLocationCountTitle';
import TrashCanLocationList from '@screens/home/TrashLocation/TrashCanLocationList';
import MapView from 'react-native-maps';
import { useRecoilValue } from 'recoil';
import { selectedLocationState } from '@states/trash';
import TrashCanDetail from '@screens/home/TrashLocation/TrashCanDetail';
import TrashCanAddress from '@screens/home/TrashLocation/TrashCanAddress';
import {
  AdjustingBar,
  AdjustingBarSection,
  ContentSection,
  GestureBar,
  GestureSection,
} from './TrashLocation.style';

interface TrashLocationBottomSheetProps {
  trashCanLocationList?: ITrashCanLocation[] | null;
  mapViewRef: RefObject<MapView>;
}

const TrashLocationBottomSheet = ({
  trashCanLocationList,
  mapViewRef,
}: TrashLocationBottomSheetProps) => {
  const [contentHeight, setContentHeight] = useState(0);
  const selectedLocation = useRecoilValue(selectedLocationState);

  const translateY = useSharedValue(0);
  const isShow = useSharedValue(false);

  useDerivedValue(() => {
    if (translateY.value === 0) isShow.value = true;
    if (translateY.value === contentHeight) isShow.value = false;
  }, [contentHeight]);

  const animatedSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const gestureBarPan: PanGesture = Gesture.Pan()
    .onChange(event => {
      const y = translateY.value + event.changeY;
      if (y < 0) return;
      translateY.value = y;
    })
    .onFinalize(event => {
      const spring = (y: number) => {
        translateY.value = withSpring(y, {
          mass: 0.2,
          damping: 10,
          velocity: 200,
        });
      };

      const threshold = contentHeight / 5;

      if (Math.abs(event.translationY) > threshold) {
        spring(isShow.value ? contentHeight : 0);
      } else {
        spring(isShow.value ? 0 : contentHeight);
      }
    });

  return (
    <Animated.View
      style={[animatedSheetStyle, { position: 'absolute', left: 0, right: 0, bottom: 0 }]}
    >
      <GestureDetector gesture={gestureBarPan}>
        <GestureSection style={[styles.shadow]}>
          <GestureBar>
            <AdjustingBarSection>
              <AdjustingBar />
            </AdjustingBarSection>
            {selectedLocation ? (
              <TrashCanAddress selectedLocation={selectedLocation} />
            ) : (
              <TrashCanLocationCountTitle count={trashCanLocationList?.length} />
            )}
          </GestureBar>
        </GestureSection>
      </GestureDetector>
      <ContentSection
        onLayout={event => {
          let y = 0;
          if (!selectedLocation && translateY.value) {
            y = event.nativeEvent.layout.height;
          }

          translateY.value = withSpring(y, {
            mass: 0.2,
            damping: 10,
            velocity: 200,
          });
          setContentHeight(event.nativeEvent.layout.height);
        }}
      >
        {selectedLocation ? (
          <TrashCanDetail selectedLocation={selectedLocation} />
        ) : (
          <TrashCanLocationList trashInfoList={trashCanLocationList} mapViewRef={mapViewRef} />
        )}
      </ContentSection>
    </Animated.View>
  );
};

export default TrashLocationBottomSheet;
