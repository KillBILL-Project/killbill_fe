import React, { Dispatch } from 'react';
import { scale } from '@utils/platform';
import Dropdown, { DropdownItemType } from '@components/Dropdown';
import { months, years } from '@screens/home/MyHistory';
import { View } from 'react-native';
import { BLACK } from '@constants/colors';

interface DatePickerProps {
  year: DropdownItemType<string>;
  setYear: Dispatch<React.SetStateAction<DropdownItemType<string>>>;
  month: DropdownItemType<string>;
  setMonth: Dispatch<React.SetStateAction<DropdownItemType<string>>>;
  color?: string;
  paddingVertical?: number;
}

const DatePicker = ({
  year,
  setYear,
  month,
  setMonth,
  color = BLACK,
  paddingVertical = 24,
}: DatePickerProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(24),
        paddingVertical: scale(paddingVertical),
      }}
    >
      <Dropdown
        itemList={years}
        selectedItem={year}
        setItem={setYear}
        dropDownWidth={180}
        dropDownHeight={88}
        buttonWidth={90}
        buttonStyle={{ borderWidth: 0 }}
        buttonTitleStyle={{ paddingHorizontal: 0 }}
        buttonTitleTextStyle={{
          fontSize: scale(18),
          fontWeight: '700',
          lineHeight: scale(28),
          color,
        }}
        iconStyle={{ margin: scale(4), tintColor: color }}
        itemTextSize={16}
        itemHeight={42}
      />
      <Dropdown
        itemList={months}
        selectedItem={month}
        setItem={setMonth}
        dropDownWidth={180}
        dropDownHeight={180}
        buttonWidth={90}
        buttonStyle={{ borderWidth: 0 }}
        buttonTitleStyle={{ paddingHorizontal: 0 }}
        buttonTitleTextStyle={{
          fontSize: scale(18),
          fontWeight: '700',
          lineHeight: scale(28),
          color,
        }}
        iconStyle={{ margin: scale(4), tintColor: color }}
        itemTextSize={16}
        itemHeight={42}
      />
    </View>
  );
};

export default DatePicker;
