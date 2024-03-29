import React, { useLayoutEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated, Easing, PanResponder, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Screen from '../../../../components/Screen/Screen';
import {
  Container,
  MotionContainer,
  TrashContainer,
  CategoryContainer,
  EmptyContainer,
  TrashHistoryContainer,
  ScrollBar,
  TrashHistoryHeader,
  Title,
  TrashCount,
  ScrollBarContainer,
  ItemContainer,
  PanResponderContainer,
  FilterContainer,
} from './HomeScreen.style';

import { H3 } from '../../../../components/Typography/Typography';
import { BLACK } from '../../../../constants/colors';
import Item from './components/Item';
import { windowHeight } from '../../../../utils/platform';
import { TAB_HEIGHT } from '../../../../constants/constants';
import Motion from './components/Motion';
import Filter from './components/Filter';
import CategorySwiper from './components/CategorySwiper';
import { useTrashLogQuery } from '../../../../hooks/queries/trash/useTrashLogQuery';

const HomeScreen = () => {
  const { data } = useTrashLogQuery();

  const [isShow, setIsShow] = useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const scrollBarContainerHeight = 32;
  const trashHistoryHeaderHeight = 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;
  const initialTopPosition = windowHeight - TAB_HEIGHT - bottom - inactiveTrashHistoryHeight;

  const motionRef = useRef<LottieView>(null);

  /* 나의 쓰레기 내역 애니메이션 시작 */
  const historyAnim = useRef(new Animated.Value(initialTopPosition)).current;

  const showHistory = () => {
    setIsShow(true);

    Animated.timing(historyAnim, {
      toValue: top,
      duration: 200,
      easing: Easing.out(Easing.linear),
      useNativeDriver: false,
    }).start();
  };

  const hideHistory = () => {
    setIsShow(false);

    Animated.timing(historyAnim, {
      toValue: initialTopPosition,
      duration: 200,
      easing: Easing.out(Easing.linear),
      useNativeDriver: false,
    }).start();
  };

  const historyPanResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const topPosition = isShow ? top : initialTopPosition;
      const position = topPosition + gestureState.dy;

      if (position > 0 && position < initialTopPosition) {
        historyAnim.setValue(position);
      }
    },
    onPanResponderEnd: (e, gestureState) => {
      const topPosition = isShow ? 0 : initialTopPosition;
      const position = topPosition + gestureState.dy;
      const velocity = gestureState.vy;

      if (velocity < -1) {
        showHistory();
        return;
      }

      if (velocity > 1 || position >= 290) {
        hideHistory();
        return;
      }

      if (position < 290) {
        showHistory();
      }
    },
  });
  /* 나의 쓰레기 내역 애니메이션 끝 */

  useLayoutEffect(() => {
    historyAnim.setValue(initialTopPosition);
  }, []);

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
            <CategorySwiper motionRef={motionRef} />
          </CategoryContainer>
          <EmptyContainer inactiveTrashHistoryHeight={inactiveTrashHistoryHeight} />
        </TrashContainer>
      </Container>

      {/* 나의 쓰레기 내역 */}
      <TrashHistoryContainer
        style={{
          top: historyAnim,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.3,
          elevation: 5,
        }}
      >
        <PanResponderContainer {...historyPanResponder.panHandlers}>
          <ScrollBarContainer scrollBarContainerHeight={scrollBarContainerHeight}>
            <ScrollBar />
          </ScrollBarContainer>
          <TrashHistoryHeader trashHistoryHeaderHeight={trashHistoryHeaderHeight}>
            <Title>
              <H3 color={BLACK}>나의 쓰레기 내역</H3>
            </Title>
            <TrashCount>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {data?.data?.data?.totalCount}개
              </Text>
            </TrashCount>
          </TrashHistoryHeader>
        </PanResponderContainer>
        <ItemContainer>
          {data?.data?.data?.trashLogResponseList.map(
            (log: any, index: { toString: () => any }) => (
              <Item data={log} key={`b${index.toString()}`} />
            ),
          )}
        </ItemContainer>
      </TrashHistoryContainer>
    </Screen>
  );
};

export default HomeScreen;
