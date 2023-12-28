import React, { useEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated, Easing, Image, PanResponder } from 'react-native';
import { LayoutChangeEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import Screen from '../../../../components/Screen/Screen';
import {
  Container,
  MotionContainer,
  TrashContainer,
  SizeBarContainer,
  SizeBar,
  SizeIndicatorContainer,
  SizeExample,
  SizeIndicator,
  SizeIndicatorTitle,
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
  Temp,
  Temp2,
  PanResponderContainer,
} from './HomeScreen.style';

import indicatorBar from '../../../../assets/image/home_indicator_bar.png';
import can from '../../../../assets/image/can.png';
import Category from './components/Category';
import { H3, Medium14 } from '../../../../components/Typography/Typography';
import { BLACK, GREY700 } from '../../../../constants/colors';
import Item from './components/Item';
import { height, ratio } from '../../../../utils/platform';
import { TAB_HEIGHT } from '../../../../constants/constants';

const HomeScreen = () => {
  const [isShow, setIsShow] = useState(false);
  const [sizeBarLayoutX, setSizeBarLayoutX] = useState(0);
  const { bottom } = useSafeAreaInsets();
  const scrollBarContainerHeight = ratio * 32;
  const trashHistoryHeaderHeight = ratio * 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;
  const initialTopPosition = height - bottom - TAB_HEIGHT - inactiveTrashHistoryHeight - ratio * 20;

  /* 스케일바 애니메이션 */
  const sizeBarAnim = useRef(new Animated.Value(0)).current;
  const myRef = useRef<Image | null>(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.measure((x, y, width, height, pageX, pageY) => {
        console.log('절대 X:', pageX, '절대 Y:', pageY);
      });
    }
  }, []);

  const onLayoutSizeBar = (event: LayoutChangeEvent) => {
    console.log('event.nativeEvent.layout: ', event.nativeEvent.layout);
    setSizeBarLayoutX(event.nativeEvent.layout.y); // 초기 Y 위치 설정
  };

  /* 나의 쓰레기 내역 애니메이션 시작 */
  const historyAnim = useRef(new Animated.Value(initialTopPosition)).current;

  const showHistory = () => {
    setIsShow(true);
    Animated.timing(historyAnim, {
      toValue: 0,
      duration: 400,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  const hideHistory = () => {
    setIsShow(false);
    Animated.timing(historyAnim, {
      toValue: initialTopPosition,
      duration: 400,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  const historyPanResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const topPosition = isShow ? 0 : initialTopPosition;
      const position = topPosition + gestureState.dy;
      if (position > 0 && position < initialTopPosition) historyAnim.setValue(position);
    },
    onPanResponderEnd: (e, gestureState) => {
      const topPosition = isShow ? 0 : initialTopPosition;
      const position = topPosition + gestureState.dy;
      if (position < 290) showHistory();
      if (position >= 290) hideHistory();
    },
  });
  /* 나의 쓰레기 내역 애니메이션 끝 */

  return (
    <Screen title="홈" isHeaderShown={false}>
      <Container>
        <MotionContainer />
        <TrashContainer>
          <SizeBarContainer>
            <Temp>
              <SizeBar ref={myRef} source={indicatorBar} />
              <Temp2>
                <Medium14 color={GREY700}>작은</Medium14>
                <Medium14 color={GREY700}>중간</Medium14>
                <Medium14 color={GREY700}>큰</Medium14>
              </Temp2>
            </Temp>
            <SizeIndicatorContainer>
              <SizeExample />
              <SizeIndicator style={{}} />
            </SizeIndicatorContainer>
          </SizeBarContainer>
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
