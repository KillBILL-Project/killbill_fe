import React from 'react';
import Separator from '@components/Separator';
import { GREY500, WHITE } from '@constants/colors';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { scale, windowHeight } from '@utils/platform';
import { Gesture, GestureDetector, PanGesture } from 'react-native-gesture-handler';
import { TooltipBottomSheetProps, tooltip } from '@screens/home/EsgWallet/type';
import { Body, Bold, Content, ContentText, Header, Title, TitleText } from './styles';

const TooltipBottomSheet = ({ setActive, selectedTooltip }: TooltipBottomSheetProps) => {
  const bottomSheetHeight = useSharedValue(0);
  const initialBottomSheetHeight = useSharedValue(0);

  const pan: PanGesture = Gesture.Pan()
    .onChange(event => {
      if (event.changeY < 0) return;
      bottomSheetHeight.value -= event.changeY;
    })
    .onFinalize(event => {
      if (
        event.velocityY > 350 ||
        bottomSheetHeight.value <= (initialBottomSheetHeight.value * 2) / 3
      ) {
        runOnJS(setActive)(false);
      } else {
        bottomSheetHeight.value = initialBottomSheetHeight.value;
      }
    });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return { top: windowHeight - bottomSheetHeight.value };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          borderTopLeftRadius: scale(10),
          borderTopRightRadius: scale(10),
          overflow: 'hidden',
          backgroundColor: WHITE,
        },
        animatedContainerStyle,
      ]}
      onLayout={event => {
        if (bottomSheetHeight.value === 0) {
          bottomSheetHeight.value = event.nativeEvent.layout.height;
          initialBottomSheetHeight.value = event.nativeEvent.layout.height;
        }
      }}
    >
      <GestureDetector gesture={pan}>
        <Header>
          <Separator length={48} thickness={4} color={GREY500} horizontal margin={10} />
        </Header>
      </GestureDetector>
      <Body>
        <Title>
          <TitleText> {tooltip[selectedTooltip].title}</TitleText>
        </Title>
        <Content>
          <ContentText>
            {tooltip[selectedTooltip].content.map(item => {
              const text = item.newline ? `\n${item.text}` : item.text;
              return item.bold ? <Bold>{text}</Bold> : text;
            })}
          </ContentText>
        </Content>
      </Body>
    </Animated.View>
  );
};

export default TooltipBottomSheet;
