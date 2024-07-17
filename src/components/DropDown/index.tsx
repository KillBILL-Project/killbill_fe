import React, { useCallback, useState } from 'react';
import {
  FlatList,
  ImageSourcePropType,
  ImageStyle,
  Modal,
  Pressable,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import arrow from '@assets/icon/select_arrow.png';
import { styles } from '@components/DropDown/styles';
import Separator from '@components/Separator';
import { GREY200 } from '@constants/colors';
import { ratio, scale } from '@utils/platform';

export type ItemType = { key: string; value: string };

interface DropDownProps<T> {
  items: T[];
  selectedItem: T;
  setItem: React.Dispatch<React.SetStateAction<T>>;
  titleKey: string | null;
  titlePrefix?: string;
  titleSuffix?: string;
  iconWidth?: number;
  iconHeight?: number;
  selectBoxWidth?: number;
  itemHeight?: number;
  selectBoxColor?: string;
  buttonStyle?: ViewStyle;
  buttonTitleStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  buttonTitleTextStyle?: TextStyle;
  buttonTitleTextSize?: number;
  visibleItemCount?: number;
  itemTextSize?: number;
  buttonWidth?: number;
  buttonHeight?: number;
  gapToSelectBox?: number;
  icon?: ImageSourcePropType;
  iconStyle?: ImageStyle;
}

const DropDown = <T,>({
  items,
  selectedItem,
  setItem,
  titleKey,
  titlePrefix,
  titleSuffix,
  iconWidth = 20,
  iconHeight = 20,
  selectBoxWidth = 250,
  itemHeight = 35,
  selectBoxColor = '#eee',
  buttonStyle,
  buttonTitleStyle,
  buttonTitleTextStyle,
  buttonTitleTextSize = 13,
  visibleItemCount = 4,
  itemTextSize = 14,
  buttonWidth,
  buttonHeight,
  gapToSelectBox = 6,
  icon = arrow,
  iconStyle,
  itemStyle,
}: DropDownProps<T>) => {
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const [active, setActive] = useState(false);

  const toggleDropDown = useCallback(() => {
    const itemCount = visibleItemCount > items.length ? items.length : visibleItemCount;

    width.value = withTiming(active ? 0 : selectBoxWidth, {
      duration: 200,
      easing: Easing.inOut(Easing.linear),
      reduceMotion: ReduceMotion.System,
    });
    height.value = withTiming(active ? 0 : itemHeight * itemCount, {
      duration: 200,
      easing: Easing.inOut(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
    setActive(prevState => !prevState);
  }, [active, height, itemHeight, items.length, selectBoxWidth, visibleItemCount, width]);

  const animatedDropDownStyle = useAnimatedStyle(() => ({
    width: width.value * ratio,
    height: height.value * ratio,
  }));

  const animatedLayoutStyle = useAnimatedStyle(() => ({
    top: offsetY.value,
    left: offsetX.value,
  }));

  const rotateIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: active ? '180deg' : '0deg' }],
  }));

  const setTitle = useCallback(
    (item: T) => {
      if (!item) return '선택';

      let title = '';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (titleKey) title = item[titleKey];
      else title = item.toString();

      if (titlePrefix) title = titlePrefix + title;
      if (titleSuffix) title += titleSuffix;

      return title;
    },
    [titleKey, titlePrefix, titleSuffix],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<T>) => {
      return (
        <View style={{ width: '100%' }}>
          <TouchableOpacity
            style={[styles.item, { height: scale(itemHeight) }, itemStyle]}
            onPress={() => {
              setItem(item);
              toggleDropDown();
            }}
          >
            <Text style={{ fontSize: scale(itemTextSize) }}>{setTitle(item)}</Text>
          </TouchableOpacity>
        </View>
      );
    },
    [itemHeight, itemStyle, itemTextSize, setTitle, setItem, toggleDropDown],
  );

  const itemSeparator = useCallback(() => {
    return <Separator horizontal length="100%" color={GREY200} />;
  }, []);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: buttonWidth ? scale(buttonWidth) : 'auto',
            height: buttonHeight ? scale(buttonHeight) : 'auto',
          },
          buttonStyle,
        ]}
        onPress={toggleDropDown}
        onPressIn={event => {
          offsetX.value = (event.nativeEvent.pageX - event.nativeEvent.locationX) / 2;
          offsetY.value =
            event.nativeEvent.pageY -
            event.nativeEvent.locationY +
            scale(28) +
            scale(gapToSelectBox);
        }}
      >
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}
        />
        <View style={[styles.buttonTitle, buttonTitleStyle]}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[{ fontSize: scale(buttonTitleTextSize) }, buttonTitleTextStyle]}>
              {setTitle(selectedItem)}
            </Text>
          </View>
          <Animated.Image
            source={icon}
            style={[
              { width: scale(iconWidth), height: scale(iconHeight) },
              iconStyle,
              rotateIconStyle,
            ]}
          />
        </View>
      </TouchableOpacity>
      <Modal visible={active} transparent statusBarTranslucent>
        <Pressable style={{ height: '100%', width: '100%', opacity: 100 }} onPress={toggleDropDown}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                width: scale(selectBoxWidth),
                alignItems: 'center',
                zIndex: 100,
              },
              animatedLayoutStyle,
            ]}
          >
            <Animated.View style={[{ overflow: 'hidden' }, animatedDropDownStyle]}>
              <View
                style={[
                  styles.selectBox,
                  {
                    flex: 1,
                    width: '100%',
                    backgroundColor: selectBoxColor,
                  },
                ]}
              >
                <FlatList
                  data={items}
                  renderItem={renderItem}
                  ItemSeparatorComponent={itemSeparator}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </Animated.View>
          </Animated.View>
        </Pressable>
      </Modal>
    </>
  );
};

export default DropDown;
