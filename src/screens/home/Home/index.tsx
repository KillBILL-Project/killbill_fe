import React, { useState } from 'react';
import Screen from '@components/Screen';
import useMotion from '@screens/home/Home/useMotion';
import BottomSheet from '@screens/home/Home/BottomSheet';
import { useRecoilValue } from 'recoil';
import { blankHeightState } from '@states/common';
import { Container, MotionContainer, TrashContainer } from './styles';
import MyTrashLogList from './MyTrashLogList';
import CategoryScroll from './CategoryScroll';

const HomeScreen = () => {
  const [trashSize, setTrashSize] = useState(1);
  const { Motion, play } = useMotion();
  const blankHeight = useRecoilValue(blankHeightState);

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Container>
        <MotionContainer>
          <Motion />
        </MotionContainer>
        <TrashContainer blankHeight={blankHeight}>
          <CategoryScroll trashSize={trashSize} playMotion={play} />
        </TrashContainer>
      </Container>
      <BottomSheet>
        <MyTrashLogList />
      </BottomSheet>
    </Screen>
  );
};

export default HomeScreen;
