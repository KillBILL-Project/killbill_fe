import React, { useCallback } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Image, StyleSheet } from 'react-native';
import { toString } from 'lodash';
import selectArrow from '@assets/icon/select_arrow.png';
import { scale } from '@utils/platform';
import { PickerContainer } from './styles';

export interface PickerItemType {
  value: string;
  label: string;
}

interface BasePickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  onClose: (value: string) => void;
  color: string;
}

interface AssignedPickerProps extends BasePickerProps {
  type: 'YEAR' | 'MONTH';
}

interface CustomPickerProps extends BasePickerProps {
  type: 'CUSTOM';
  list: PickerItemType[];
}

type PickerProps = AssignedPickerProps | CustomPickerProps;

const years = [
  { value: '2024', label: '2024년' },
  { value: '2023', label: '2023년' },
  { value: '2022', label: '2022년' },
  { value: '2021', label: '2021년' },
];

const months = Array.from({ length: 13 }, (_, i) =>
  i === 0
    ? { value: '-1', label: '전체' }
    : { value: i < 10 ? `0${i}` : toString(i), label: `${i}월` },
);

const styles = StyleSheet.create({
  input: {
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(28),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scale(60),
  },
  iconContainer: { position: 'relative', marginLeft: scale(4) },
  icon: { width: scale(20), height: scale(20) },
});

const Picker = (props: PickerProps) => {
  const { type, color, onValueChange, selectedValue, onClose } = props;

  let pickerList;

  if (type === 'CUSTOM') {
    const { list } = props;
    pickerList = list;
  } else if (type === 'MONTH') {
    pickerList = months;
  } else {
    pickerList = years;
  }

  const memoizedIcon = useCallback(
    () => <Image source={selectArrow} style={{ ...styles.icon, tintColor: color }} />,
    [color],
  );

  return (
    <PickerContainer>
      <RNPickerSelect
        items={pickerList}
        placeholder={{}}
        onValueChange={value => onValueChange(value)}
        onClose={() => onClose(selectedValue)}
        Icon={memoizedIcon}
        style={{
          iconContainer: styles.iconContainer,
          inputIOS: { ...styles.input, color },
          inputIOSContainer: styles.inputContainer,
          inputAndroid: { ...styles.input, color },
          inputAndroidContainer: styles.inputContainer,
        }}
        useNativeAndroidPickerStyle={false}
      />
    </PickerContainer>
  );
};

export default Picker;
