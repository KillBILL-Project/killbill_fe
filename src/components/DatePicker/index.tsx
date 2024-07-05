import React, { Dispatch } from 'react';
import { scale } from '@utils/platform';
import DropDown from '@components/DropDown';
import Spacer from '@components/Spacer';
import { months, MonthType } from '@screens/home/MyHistory';
import { View } from 'react-native';
import { BLACK } from '@constants/colors';

interface DatePickerProps {
  year: string;
  setYear: Dispatch<React.SetStateAction<string>>;
  month: MonthType;
  setMonth: Dispatch<React.SetStateAction<MonthType>>;
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
      <DropDown
        items={['2024', '2023']}
        selectedItem={year}
        setItem={setYear}
        titleKey={null}
        titleSuffix="년"
        selectBoxWidth={180}
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
        selectBoxColor="#fafafa"
      />
      <Spacer width={12} />
      <DropDown
        items={months}
        selectedItem={month}
        setItem={setMonth}
        titleKey="label"
        selectBoxWidth={180}
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
        selectBoxColor="#fafafa"
      />
    </View>
  );
};

export default DatePicker;
