import React from 'react';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import useThrowTrashMutation from '@hooks/mutation/trash/useThrowTrashMutation';
import TrashCategory from '@screens/home/Home/TrashCategory';
import { trashCategory } from '@constants/trash';
import { useTrashInfoQuery } from '@hooks/queries/trash/useTrashInfoQuery';
import { CategoryScrollProps } from '@screens/home/Home/constant';
import { convertTrashCategory } from '@utils/trash';
import { TrashCategoryKrType } from '@type/trash';
import { ratio } from '@utils/platform';
import { find } from 'lodash';
import { Column, Container, Row } from './styles';

const CategoryScroll = ({ playMotion }: CategoryScrollProps) => {
  const { trashInfo } = useTrashInfoQuery();
  const { mutate: throwTrash } = useThrowTrashMutation();
  const trashCategoryList = Array.from({ length: 5 }).flatMap(() => trashCategory);

  const changeX = useSharedValue(
    -ratio * (88 + 72 * (Math.round(trashCategoryList.length / 2) - 1)),
  );

  const isHorizontal = useSharedValue(true);

  const selectedIndex = useDerivedValue(() => {
    return Math.min(
      trashCategoryList.length - 1,
      Math.max(0, -Math.round((changeX.value - ratio * 16) / (ratio * 72))),
    );
  });

  const changeIndex = (index: number) => {
    const position = index ? ratio * (88 + 72 * (index - 1)) : 0;
    changeX.value = withTiming(-position, {
      duration: 100,
      easing: Easing.inOut(Easing.circle),
      reduceMotion: ReduceMotion.System,
    });
  };

  const pan = Gesture.Pan()
    .onStart(event => {
      isHorizontal.value = event.velocityY > -300;
    })
    .onChange(event => {
      if (isHorizontal.value) changeX.value += event.changeX;
    })
    .onFinalize(() => {
      const position = selectedIndex.value ? ratio * (88 + 72 * (selectedIndex.value - 1)) : 0;
      changeX.value = withSpring(-position, {
        duration: 400,
        dampingRatio: 0.9,
        stiffness: 100,
      });
    });

  const panAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: changeX.value }],
  }));

  const handleThrowTrash = (index: number, long?: boolean) => {
    const actualIndex = index % trashCategoryList.length;
    const selectedTrashCategory = trashCategoryList[actualIndex];
    const selectedTrashInfo = find(
      trashInfo,
      info => info.size === 'MEDIUM' && info.trashCategoryName === selectedTrashCategory.name,
    );

    if (selectedTrashInfo) throwTrash(selectedTrashInfo.trashInfoId);
    playMotion.empty(long);
  };

  return (
    <Container>
      <GestureDetector gesture={pan}>
        <Animated.View style={[panAnimatedStyles]}>
          <Column>
            <Row>
              {trashCategoryList.map((item, index) => {
                return (
                  <TrashCategory
                    key={item.name + index}
                    index={index}
                    selectedIndex={selectedIndex}
                    image={item.image}
                    text={convertTrashCategory(item.name) as TrashCategoryKrType}
                    isHorizontal={isHorizontal}
                    parentPanGesture={pan}
                    throwTrash={handleThrowTrash}
                    playMotion={playMotion}
                    changeIndex={() => changeIndex(index)}
                  />
                );
              })}
            </Row>
          </Column>
        </Animated.View>
      </GestureDetector>
    </Container>
  );
};

export default CategoryScroll;
