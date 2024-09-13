import React, { useState } from 'react';
import Screen from '@components/Screen';
import useMotion from '@screens/home/Home/useMotion';
import BottomSheet from '@screens/home/Home/BottomSheet';
import { useTrashLogQuery } from '@hooks/queries/trash/useTrashLogQuery';
import MyTrashLogHeader from '@screens/home/TrashLocation/MyTrashLogHeader';
import { Container, MotionContainer, TrashContainer } from './styles';
import MyTrashLogList from './MyTrashLogList';
import CategoryScroll from './CategoryScroll';

const HomeScreen = () => {
  const { data, hasNextPage, fetchNextPage } = useTrashLogQuery();
  const [trashSize, setTrashSize] = useState(1);
  const { Motion, play } = useMotion();

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Container>
        <MotionContainer>
          <Motion />
        </MotionContainer>
        <TrashContainer blankHeight={0}>
          <CategoryScroll trashSize={trashSize} playMotion={play} />
        </TrashContainer>
      </Container>
      <BottomSheet headerComponent={<MyTrashLogHeader totalCount={data?.pages[0].totalCount} />}>
        <MyTrashLogList
          trashLogList={data}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </BottomSheet>
    </Screen>
  );
};

export default HomeScreen;
