import React, { useCallback, useState } from 'react';
import {
  FlatList,
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import arrow from '@assets/icon/select_arrow.png';
import { styles } from '@components/Dropdown/styles';
import Separator from '@components/Separator';
import { GREY200 } from '@constants/colors';
import { scale, width } from '@utils/platform';
import DropdownFrame from '@components/DropdownFrame';
import DropdownItem from '@components/Dropdown/DropdownItem';

export type DropdownItemType<T> = { label: string; value: T };

interface DropdownProps<T> {
  itemList: DropdownItemType<T>[];
  selectedItem: DropdownItemType<T>;
  setItem: React.Dispatch<React.SetStateAction<DropdownItemType<T>>>;
  iconWidth?: number;
  iconHeight?: number;
  dropDownWidth: number;
  dropDownHeight: number;
  itemHeight?: number;
  selectBoxColor?: string;
  buttonStyle?: ViewStyle;
  buttonTitleStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  buttonTitleTextStyle?: TextStyle;
  buttonTitleTextSize?: number;
  itemTextSize?: number;
  buttonWidth: number;
  buttonHeight?: number;
  gapToSelectBox?: number;
  icon?: ImageSourcePropType;
  iconStyle?: ImageStyle;
}

const Dropdown = <T,>({
  itemList,
  selectedItem,
  setItem,
  iconWidth = 20,
  iconHeight = 20,
  dropDownWidth,
  itemHeight = 35,
  selectBoxColor,
  buttonStyle,
  buttonTitleStyle,
  buttonTitleTextStyle,
  buttonTitleTextSize = 13,
  dropDownHeight,
  itemTextSize = 14,
  buttonWidth,
  buttonHeight,
  gapToSelectBox = -4,
  icon = arrow,
  iconStyle,
  itemStyle,
}: DropdownProps<T>) => {
  const dynamicStyles = StyleSheet.create({
    button: {
      width: scale(buttonWidth),
      height: buttonHeight ? scale(buttonHeight) : 'auto',
    },
    buttonTitleText: {
      fontSize: scale(buttonTitleTextSize),
    },
    icon: {
      width: scale(iconWidth),
      height: scale(iconHeight),
    },
  });

  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const setOffset = (event: GestureResponderEvent) => {
    let x =
      event.nativeEvent.pageX -
      event.nativeEvent.locationX -
      (scale(dropDownWidth) - scale(buttonWidth)) / 2;

    if (x < scale(10)) x = scale(10);
    if (x + scale(dropDownWidth) > width - scale(10)) x = width - scale(dropDownWidth) - scale(10);

    setOffsetX(x);
    setOffsetY(
      event.nativeEvent.pageY -
        event.nativeEvent.locationY +
        scale(itemHeight) +
        scale(gapToSelectBox),
    );
  };

  const rotateIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: isActiveDropdown ? '180deg' : '0deg' }],
  }));

  const itemSeparator = useCallback(() => {
    return <Separator horizontal length="100%" color={GREY200} />;
  }, []);

  return (
    <>
      <TouchableOpacity
        style={[styles.button, dynamicStyles.button, buttonStyle]}
        onPress={() => setIsActiveDropdown(true)}
        onPressIn={event => setOffset(event)}
      >
        <View style={styles.eventCapturingView} />
        <View style={[styles.buttonTitle, buttonTitleStyle]}>
          <View style={styles.buttonTitleTextWrapper}>
            <Text style={[dynamicStyles.buttonTitleText, buttonTitleTextStyle]}>
              {selectedItem.label}
            </Text>
          </View>
          <Animated.Image source={icon} style={[dynamicStyles.icon, iconStyle, rotateIconStyle]} />
        </View>
      </TouchableOpacity>
      <DropdownFrame
        isActiveModal={isActiveDropdown}
        setIsActiveModal={setIsActiveDropdown}
        dropDownWidth={dropDownWidth}
        dropDownHeight={dropDownHeight}
        offsetX={offsetX}
        offsetY={offsetY}
        backgroundColor={selectBoxColor}
        containerStyle={{ borderRadius: 5, borderWidth: 2, borderColor: '#eee' }}
      >
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <DropdownItem
              itemHeight={itemHeight}
              itemTextSize={itemTextSize}
              itemStyle={itemStyle}
              item={item}
              setItem={setItem}
              setIsActiveDropdown={setIsActiveDropdown}
            />
          )}
          ItemSeparatorComponent={itemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </DropdownFrame>
    </>
  );
};

export default Dropdown;
