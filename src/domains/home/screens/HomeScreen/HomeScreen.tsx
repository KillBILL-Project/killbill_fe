import React, { useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Screen from '../../../../components/Screen/Screen';
import {
  Container,
  MotionContainer,
  TrashContainer,
  CategoryContainer,
  EmptyContainer,
  FilterContainer,
} from './HomeScreen.style';

import Motion from './components/Motion';
import Filter from './components/Filter';
import CategorySwiper from './components/CategorySwiper';
import WwoossBottomSheet from '../../../../components/common/WwoossBottomSheet';
import MyTrashLogList from './components/MyTrashLogList';
import ScrollLoopPicker from '../../../../components/ScrollLoopPicker';

const l = [...Array(1)].flatMap(() => Array.from({ length: 12 }, (_, i) => i + 1));

const HomeScreen = () => {
  const [value, setValue] = useState(2);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const scrollBarContainerHeight = 32;
  const trashHistoryHeaderHeight = 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;

  const motionRef = useRef<LottieView>(null);

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Container>
        <MotionContainer>
          <Motion motionRef={motionRef} />
        </MotionContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <TrashContainer>
          <CategoryContainer>
            {/* <CategorySwiper motionRef={motionRef} /> */}
            <ScrollLoopPicker
              horizontal
              items={l}
              visibleItemCount={3}
              value={value}
              setValue={setValue}
            />
          </CategoryContainer>
          <EmptyContainer inactiveTrashHistoryHeight={inactiveTrashHistoryHeight} />
        </TrashContainer>
      </Container>

      <WwoossBottomSheet bottomSheetRef={bottomSheetRef} openPoint="10%" maxOpenPoint="90%">
        <MyTrashLogList />
      </WwoossBottomSheet>
    </Screen>
  );
};

export default HomeScreen;
