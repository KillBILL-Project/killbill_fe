import React from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withClamp,
  withDecay,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, PanGesture } from 'react-native-gesture-handler';
import { TouchableOpacity, View } from 'react-native';
import { filter } from 'lodash';
import { useTrashInfoQuery } from '../../../../../../hooks/queries/trash/useTrashInfoQuery';
import { Column, Container, Row } from './CategoryScroll.style';
import TrashCategory from '../TrashCategory';
import useThrowTrashMutation from '../../../../../../hooks/mutation/trash/useThrowTrashMutation';
import { trashSizeMeta } from '../TrashSizeFilter/TrashSizeFilter';
import { CategoryScrollProps, ITEM_SIZE, SELECT_ITEM_SIZE } from '../../../../../../types/home';

const CategoryScroll = ({ trashSize, motionRef }: CategoryScrollProps) => {
  const { mutate } = useThrowTrashMutation();
  const { data = [] } = useTrashInfoQuery();
  const filteredTrashInfo = filter(data, item => item.size === trashSizeMeta[trashSize].id);
  const trashInfo = Array.from({ length: 10 }).flatMap(() => Array.from(filteredTrashInfo));

  const wholeWidth = ITEM_SIZE * (trashInfo.length - 1) + SELECT_ITEM_SIZE;
  const zeroPoint = wholeWidth / 2;

  const offset = useSharedValue<number>(-ITEM_SIZE / 2);
  const changeX = useSharedValue(0);

  const selectedIndex = useDerivedValue(() => {
    const v = offset.value - zeroPoint;
    const index = Math.floor(-v / ITEM_SIZE);
    return index >= trashInfo.length ? trashInfo.length - 1 : index;
  });

  const setOffset = (index: number) => {
    const c2 = index * ITEM_SIZE;
    const c1 = c2 + SELECT_ITEM_SIZE;
    const c3 = (c1 + c2) / 2;

    offset.value = withClamp(
      { min: zeroPoint - c1, max: zeroPoint - c2 },
      withSpring(zeroPoint - c3, {
        duration: 800,
        dampingRatio: 0.7,
        stiffness: 100,
      }),
    );
  };

  const onPressTrash = (index: number) => {
    if (index === selectedIndex.value) {
      const actualIndex = index % filteredTrashInfo.length;
      const selectedTrashInfo = filteredTrashInfo[actualIndex];
      mutate(selectedTrashInfo.trashInfoId);
      if (motionRef.current) {
        motionRef.current.reset();
        motionRef.current.play();
      }
    }
    setOffset(index);
  };

  const pan: PanGesture = Gesture.Pan()
    .onChange(event => {
      const nextOffset = offset.value + event.changeX;
      if (nextOffset > -zeroPoint && nextOffset < zeroPoint) {
        offset.value = nextOffset;
        changeX.value = event.changeX;
      }
    })
    .onFinalize(event => {
      offset.value = withDecay(
        {
          velocity: event.velocityX,
          deceleration: 0.994,
          rubberBandEffect: false,
          clamp: [-zeroPoint + 20, zeroPoint - 20],
        },
        () => {
          const c2 = selectedIndex.value * ITEM_SIZE;
          const c1 = c2 + SELECT_ITEM_SIZE;
          const c3 = (c1 + c2) / 2;

          offset.value = withClamp(
            { min: zeroPoint - c1, max: zeroPoint - c2 },
            withSpring(zeroPoint - c3, {
              duration: 800,
              dampingRatio: 0.7,
              stiffness: 100,
            }),
          );
        },
      );
    });

  const panAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <Container>
      <GestureDetector gesture={pan}>
        <Animated.View style={[panAnimatedStyles]}>
          <Column>
            <Row>
              {trashInfo.map((value, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.85}
                    key={value.trashCategoryName + index}
                    onPress={() => onPressTrash(index)}
                  >
                    <TrashCategory
                      index={index}
                      selectedIndex={selectedIndex}
                      image={value.trashImagePath}
                      trashSize={trashSize}
                      changeX={changeX}
                    />
                  </TouchableOpacity>
                );
              })}
            </Row>
            <View
              style={{
                position: 'absolute',
                height: 1,
                width: wholeWidth - 100,
                backgroundColor: '#E6E6E6',
                zIndex: -100,
              }}
            />
          </Column>
        </Animated.View>
      </GestureDetector>
    </Container>
  );
};

export default CategoryScroll;
