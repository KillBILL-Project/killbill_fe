import {
  Animated,
  Easing,
  FlatList,
  PanResponder,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ItemContainer,
  PanResponderContainer,
  ScrollBar,
  ScrollBarContainer,
  TrashHistoryContainer,
  TrashHistoryHeader,
} from '../HomeScreen/HomeScreen.style';
import { windowHeight } from '../../../../utils/platform';
import { TAB_HEIGHT } from '../../../../constants/constants';
import Item from '../HomeScreen/components/Item';

const TrashList = ({ data }: any) => {
  const [isShow, setIsShow] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const scrollBarContainerHeight = 32;
  const trashHistoryHeaderHeight = 52;
  const headerHeight = 100;
  const inactiveTrashHistoryHeight =
    scrollBarContainerHeight + trashHistoryHeaderHeight + headerHeight;
  const initialTopPosition = windowHeight - TAB_HEIGHT - bottom - inactiveTrashHistoryHeight;

  const historyAnim = useRef(new Animated.Value(initialTopPosition)).current;

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={{ marginVertical: 10 }}>
      <Text style={{ fontWeight: 'bold', color: '#767676' }}>{item.address}</Text>
    </TouchableOpacity>
  );

  const showHistory = () => {
    setIsShow(true);

    Animated.timing(historyAnim, {
      toValue: windowHeight - TAB_HEIGHT - 400,
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
      const topPosition = isShow ? windowHeight - TAB_HEIGHT - 400 : initialTopPosition;
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
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#767676' }}>
              내 근처 분리수거 {data ? data.length : 0}곳
            </Text>
          </View>
        </TrashHistoryHeader>
      </PanResponderContainer>
      <ScrollView contentContainerStyle={{ flexGrow: 1, height: '100%' }}>
        {data?.map((trashInfo: any, index: { toString: () => any }) => (
          <TouchableOpacity key={`trash_${index.toString}`} style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold', color: '#767676' }}>{trashInfo.address}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.trashCanId}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </TrashHistoryContainer>
  );
};

export default TrashList;
