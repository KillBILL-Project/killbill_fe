import React, { useCallback, useRef } from 'react';
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
import {
  Container,
  EmptyTrashButton,
  EmptyTrashButtonText,
  MotionContainer,
  styles,
  TrashContainer,
} from './styles';
import MyTrashLogList from './MyTrashLogList';
import CategoryScroll from './CategoryScroll';

const AnimatedLottieView = RnAnimated.createAnimatedComponent(LottieView);

const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<HomeParamList>>();
  const { showConfirm, Confirm } = useConfirm();
  const { showAlert, Alert } = useAlert();

  const { data, hasNextPage, fetchNextPage } = useTrashLogQuery();
  const { data: count } = useTrashCanContentsCount();

  const progress = useRef(new RnAnimated.Value(0));

  const reset = useCallback(() => {
    progress.current.resetAnimation();
  }, []);

  const open = useCallback((fn?: () => void) => {
    progress.current.stopAnimation();
    RnAnimated.timing(progress.current, {
      toValue: 0.5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      if (fn) fn();
    });
  }, []);

  const close = useCallback(() => {
    progress.current.stopAnimation();
    RnAnimated.timing(progress.current, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const empty = useCallback(() => {
    progress.current.stopAnimation();
    RnAnimated.timing(progress.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      progress.current.setValue(0);
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

  const lottieHeight = useRef(new RnAnimated.Value(0)).current;

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Confirm />
      <Alert />
      <Container>
        <MotionContainer
          onLayout={event => {
            const h = event.nativeEvent.layout.height;
            const r = 406 / 376;
            lottieHeight.setValue(h > 376 ? width * r : h);
          }}
        >
          <ImageBackground source={homeBackground} style={styles.imageBackground}>
            <AnimatedLottieView
              source={spinner}
              loop={false}
              renderMode="AUTOMATIC"
              style={{ height: lottieHeight }}
              progress={progress.current}
            />
            <View style={[styles.trashCountContainer]}>
              <View style={styles.trashCountBox}>
                <Text style={styles.trashCountText}>{count == null ? '' : `${count}개`}</Text>
              </View>
            </View>
            <EmptyTrashButton onPress={emptyTrash}>
              <EmptyTrashButtonText>비우기</EmptyTrashButtonText>
            </EmptyTrashButton>
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
    </Screen>
  );
};

export default HomeScreen;
