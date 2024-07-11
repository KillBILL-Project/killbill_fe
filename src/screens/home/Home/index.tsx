import React, { useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Screen from '@components/Screen';
import WwoossBottomSheet from '@components/common/WwoossBottomSheet';
import useMotion from '@screens/home/Home/useMotion';
import { Container, EmptyContainer, MotionContainer, TrashContainer } from './styles';
import MyTrashLogList from './MyTrashLogList';
import CategoryScroll from './CategoryScroll';

const HomeScreen = () => {
  const [trashSize, setTrashSize] = useState(1);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { Motion, play } = useMotion();

  const scrollBarContainerHeight = 32;
  const trashHistoryHeaderHeight = 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Container>
        <MotionContainer>
          <Motion />
        </MotionContainer>
        <TrashContainer>
          <CategoryScroll trashSize={trashSize} playMotion={play} />
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
