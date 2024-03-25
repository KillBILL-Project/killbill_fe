import React, { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  Container,
  Index,
  IndexText,
  PanResponderContainer,
  Title,
  TitleContainer,
  TitleText,
} from './UserGuideDetailScreen.style';
import Screen from '../../../../components/Screen';
import { BLACK, GREY700, LIGHT, PRIMARY, WHITE } from '../../../../constants/colors';
import { hRatio, userGuideList } from '../../../../constants/userGuide';
import SliderItem from './components/SliderItem';
import { HomeStackParamList } from '../../../../types/navigation';

const movement = hRatio * 540 + hRatio * 56;

const UserGuideDetailScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onMove, setOnMove] = useState<boolean>(false);
  const { params } = useRoute<RouteProp<HomeStackParamList, 'UserGuideDetail'>>();

  const ref = useRef<ScrollView>(null);

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = event.nativeEvent.contentOffset;
    const index = Math.round(y / movement);

    ref.current?.scrollTo({ y: index * movement, animated: false });
    if (index !== currentIndex) setCurrentIndex(index);
    setOnMove(false);
  };

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.velocity?.y === 0) {
      onMomentumScrollEnd(event);
    }
  };

  const onScrollBeginDrag = () => {
    setOnMove(true);
  };

  return (
    <Screen title="플라스틱 가이드" headerColor={BLACK} titleColor={WHITE} backButtonColor={WHITE}>
      <Container colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.3239 }}>
        <TitleContainer>
          <Title>
            <TitleText color={PRIMARY}>플라스틱 가이드</TitleText>
          </Title>
          <Index>
            <IndexText>
              <TitleText color={PRIMARY}>{currentIndex + 1}</TitleText>
              <TitleText color={GREY700}> /5</TitleText>
            </IndexText>
          </Index>
        </TitleContainer>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignSelf: 'center',
          }}
        >
          <ScrollView
            ref={ref}
            onScroll={() => {}}
            onMomentumScrollEnd={onMomentumScrollEnd}
            onScrollEndDrag={onScrollEndDrag}
            onScrollBeginDrag={onScrollBeginDrag}
            scrollEventThrottle={16}
            decelerationRate="fast"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <PanResponderContainer>
              {userGuideList[params.category].map((item, index) => {
                return (
                  <SliderItem
                    key={`sliderItem${index.toString()}`}
                    isFullWidth={item.isFullWidth}
                    image={item.image}
                    guidance={item.guidance}
                  />
                );
              })}
            </PanResponderContainer>
          </ScrollView>
        </View>
      </Container>
    </Screen>
  );
};

export default UserGuideDetailScreen;
