import React, { useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Screen from '@components/Screen';
import WwoossBottomSheet from '@components/common/WwoossBottomSheet';
import { Container, EmptyContainer, MotionContainer, TrashContainer } from './styles';

import Motion from './Motion';
import MyTrashLogList from './MyTrashLogList';
import CategoryScroll from './CategoryScroll';

const HomeScreen = () => {
  const [trashSize, setTrashSize] = useState(1);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const scrollBarContainerHeight = 32;
  const trashHistoryHeaderHeight = 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;
  const motionRef = useRef<LottieView>(null);

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Container>
        <MotionContainer style={{ marginBottom: 30 }}>
          <Motion motionRef={motionRef} />
        </MotionContainer>
        <TrashContainer>
          <CategoryScroll trashSize={trashSize} motionRef={motionRef} />
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
