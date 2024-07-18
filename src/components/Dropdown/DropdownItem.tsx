import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from '@components/Dropdown/styles';
import { scale } from '@utils/platform';
import React from 'react';
import { DropdownItemType } from '@components/Dropdown/index';

interface DropdownItemProps<T> {
  itemHeight: number;
  itemTextSize: number;
  itemStyle?: ViewStyle;
  item: DropdownItemType<T>;
  setItem: (params: DropdownItemType<T>) => void;
  setIsActiveDropdown: (params?: any) => void;
}

const DropdownItem = <T,>({
  itemStyle,
  itemHeight,
  item,
  setItem,
  setIsActiveDropdown,
  itemTextSize,
}: DropdownItemProps<T>) => {
  const dynamicStyles = StyleSheet.create({
    item: { height: scale(itemHeight) },
    itemText: { fontSize: scale(itemTextSize) },
  });

  return (
    <TouchableOpacity
      style={[styles.item, dynamicStyles.item, itemStyle]}
      onPress={() => {
        setItem(item);
        setIsActiveDropdown(false);
      }}
    >
      <Text style={dynamicStyles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default DropdownItem;
