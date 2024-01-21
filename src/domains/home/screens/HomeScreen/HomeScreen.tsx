import React, { useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated, Easing, PanResponder } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import {
  Container,
  MotionContainer,
  TrashContainer,
  CategoryContainer,
  CategoryScroll,
  EmptyContainer,
  TrashHistoryContainer,
  ScrollBar,
  TrashHistoryHeader,
  Title,
  TrashCount,
  ScrollBarContainer,
  ItemContainer,
  PanResponderContainer,
} from './HomeScreen.style';

import can from '../../../../assets/image/can.png';
import Category from './components/Category';
import { H3 } from '../../../../components/Typography/Typography';
import { BLACK } from '../../../../constants/colors';
import Item from './components/Item';
import { windowHeight, ratio } from '../../../../utils/platform';
import { TAB_HEIGHT } from '../../../../constants/constants';

const HomeScreen = () => {
  const [isShow, setIsShow] = useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const scrollBarContainerHeight = ratio * 32;
  const trashHistoryHeaderHeight = ratio * 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;
  const initialTopPosition =
    windowHeight - bottom - TAB_HEIGHT - inactiveTrashHistoryHeight - ratio * 20;

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
      if (position > 0 && position < initialTopPosition) historyAnim.setValue(position);
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

  return (
    <Screen title="홈" isHeaderShown={false}>
      <Container>
        <MotionContainer />
        <TrashContainer>
          <CategoryContainer>
            <CategoryScroll>
              {[...Array(10)].map((_, index) => (
                <Category key={`a${index.toString()}`} isSelected={index === 1} image={can} />
              ))}
            </CategoryScroll>
          </CategoryContainer>
          <EmptyContainer inactiveTrashHistoryHeight={inactiveTrashHistoryHeight} />
        </TrashContainer>
      </Container>

      {/* 나의 쓰레기 내역 */}
      <TrashHistoryContainer
        style={{
          top: historyAnim,
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
              <H3 color={BLACK}>3개</H3>
            </TrashCount>
          </TrashHistoryHeader>
        </PanResponderContainer>
        <ItemContainer>
          {[...Array(10)].map((_, index) => (
            <Item key={`b${index.toString()}`} />
          ))}
        </ItemContainer>
      </TrashHistoryContainer>
    </Screen>
  );
};

export default HomeScreen;
