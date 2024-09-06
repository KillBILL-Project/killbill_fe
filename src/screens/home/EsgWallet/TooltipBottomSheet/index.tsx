import React from 'react';
import { WHITE } from '@constants/colors';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { scale } from '@utils/platform';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGesture,
} from 'react-native-gesture-handler';
import { tooltip, TooltipBottomSheetProps } from '@screens/home/EsgWallet/type';
import { Body, Bold, Content, ContentText, Header, HeaderBar, Title, TitleText } from './styles';

const TooltipBottomSheet = ({ setActive, selectedTooltip }: TooltipBottomSheetProps) => {
  const bottomSheetHeight = useSharedValue(0);
  const bottomSheetPosition = useSharedValue(0);

  const pan: PanGesture = Gesture.Pan()
    .onChange(event => {
      if (bottomSheetPosition.value <= 0 && bottomSheetHeight.value > -bottomSheetPosition.value) {
        const position = bottomSheetPosition.value - event.changeY;
        bottomSheetPosition.value = position > 0 ? 0 : position;
      }
    })
    .onFinalize(() => {
      if (-Math.round(bottomSheetHeight.value / 7) > bottomSheetPosition.value) {
        runOnJS(setActive)(false);
      } else {
        bottomSheetPosition.value = 0;
      }
    });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      bottom: bottomSheetPosition.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
          borderTopLeftRadius: scale(10),
          borderTopRightRadius: scale(10),
          overflow: 'hidden',
          backgroundColor: WHITE,
          width: '100%',
        },
        animatedContainerStyle,
      ]}
      onLayout={event => {
        if (bottomSheetHeight.value === 0) {
          bottomSheetHeight.value = event.nativeEvent.layout.height;
        }
      }}
    >
      <GestureHandlerRootView style={{}}>
        <GestureDetector gesture={pan}>
          <Header>
            <HeaderBar />
          </Header>
        </GestureDetector>
        <Body>
          <Title>
            <TitleText>{tooltip[selectedTooltip].title}</TitleText>
          </Title>
          <Content>
            <ContentText>
              {tooltip[selectedTooltip].content.map((item, index) => {
                const text = item.newline ? `\n${item.text}` : item.text;
                return item.bold ? <Bold key={`${item.text + index}`}>{text}</Bold> : text;
              })}
            </ContentText>
          </Content>
        </Body>
      </GestureHandlerRootView>
    </Animated.View>
  );
};

export default TooltipBottomSheet;
