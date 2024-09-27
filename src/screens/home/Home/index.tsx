import React, { useCallback, useEffect, useRef, useState } from 'react';
import Screen from '@components/Screen';
import BottomSheet from '@screens/home/Home/BottomSheet';
import { useTrashLogQuery } from '@hooks/queries/trash/useTrashLogQuery';
import MyTrashLogHeader from '@screens/home/TrashLocation/MyTrashLogHeader';
import useTrashCanContentsCount from '@hooks/queries/trash/useTrashCanContentsCount';
import { Animated as RnAnimated, Easing, ImageBackground, Text, View } from 'react-native';
import homeBackground from '@assets/image/home_background.png';
import spinner from '@assets/lottie/mot.json';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeParamList } from '@type/navigation';
import LottieView from 'lottie-react-native';
import { width } from '@utils/platform';
import useAlert from '@hooks/useAlert';
import useConfirm from '@hooks/useConfirm';
import HomeGuide from '@screens/home/Home/HomeGuide';
import { getHomeGuideShown } from '@states/asyncStorage';
import { useSetRecoilState } from 'recoil';
import { screenHeightState } from '@states/common';
import {
  Container,
  EmptyTrashButton,
  EmptyTrashButtonSection,
  EmptyTrashButtonText,
  MotionContainer,
  styles,
  TrashContainer,
} from './styles';
import MyTrashLogList from './MyTrashLogList';
import CategoryScroll from './CategoryScroll';

const AnimatedLottieView = RnAnimated.createAnimatedComponent(LottieView);

const HomeScreen = () => {
  const lottieHeightAnim = useRef(new RnAnimated.Value(0)).current;
  const [motionHeight, setMotionHeight] = useState(0);
  const [lottieHeight, setLottieHeight] = useState(0);
  const [guideShown, setGuideShown] = useState(false);
  const motionProgress = useRef(new RnAnimated.Value(0));

  const { data, hasNextPage, fetchNextPage } = useTrashLogQuery();
  const { data: count } = useTrashCanContentsCount();

  const { navigate } = useNavigation<NavigationProp<HomeParamList>>();
  const { showConfirm, Confirm } = useConfirm();
  const { showAlert, Alert } = useAlert();

  const reset = useCallback(() => {
    motionProgress.current.resetAnimation();
  }, []);

  const open = useCallback((fn?: () => void) => {
    motionProgress.current.stopAnimation();
    RnAnimated.timing(motionProgress.current, {
      toValue: 0.5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      if (fn) fn();
    });
  }, []);

  const close = useCallback(() => {
    motionProgress.current.stopAnimation();
    RnAnimated.timing(motionProgress.current, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const empty = useCallback(() => {
    motionProgress.current.stopAnimation();
    RnAnimated.timing(motionProgress.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      motionProgress.current.setValue(0);
    });
  }, []);

  const emptyTrash = () => {
    if (!count) {
      showAlert({ content: '비울 쓰레기가 없습니다.' });
      return;
    }

    showConfirm({
      content: `지금부터 쓰레기를 비웁니다.${'\n'}정말 비우시겠습니까?`,
      confirmText: '비울게요',
      confirmAction: () => navigate('EmptyTrash'),
    });
  };

  useEffect(() => {
    (async () => {
      const homeGuideShown = await getHomeGuideShown();
      setGuideShown(homeGuideShown === 'true');
    })();
  }, []);
  const setScreenHeight = useSetRecoilState(screenHeightState);

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Confirm />
      <Alert />
      <Container
        onLayout={e => {
          console.log('e.nativeEvent.layout.height: ', e.nativeEvent.layout.height);
          setScreenHeight(e.nativeEvent.layout.height);
        }}
      >
        <MotionContainer
          onLayout={event => {
            const h = event.nativeEvent.layout.height;
            setMotionHeight(h);
            const r = 406 / 376;
            setLottieHeight(h > 376 ? width * r : h);
            lottieHeightAnim.setValue(h > 376 ? width * r : h);
          }}
        >
          <ImageBackground source={homeBackground} style={styles.imageBackground}>
            <AnimatedLottieView
              source={spinner}
              loop={false}
              renderMode="AUTOMATIC"
              style={{ height: lottieHeightAnim }}
              progress={motionProgress.current}
            />
            <View style={[styles.trashCountContainer]}>
              <View style={styles.trashCountBox}>
                <Text style={styles.trashCountText}>{count == null ? '' : `${count}개`}</Text>
              </View>
            </View>
            <EmptyTrashButtonSection>
              <EmptyTrashButton onPress={emptyTrash}>
                <EmptyTrashButtonText>비우기</EmptyTrashButtonText>
              </EmptyTrashButton>
            </EmptyTrashButtonSection>
          </ImageBackground>
        </MotionContainer>
        <TrashContainer>
          <CategoryScroll playMotion={{ open, close, empty, reset }} />
        </TrashContainer>
      </Container>
      <BottomSheet headerComponent={<MyTrashLogHeader totalCount={data?.pages[0].totalCount} />}>
        <MyTrashLogList
          trashLogList={data}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </BottomSheet>
      <HomeGuide
        visible={!guideShown}
        motionHeight={motionHeight}
        lottieHeight={lottieHeight}
        setGuideShown={setGuideShown}
      />
    </Screen>
  );
};

export default HomeScreen;
