import React from 'react';
import { DayPickerButton, DayPickerButtonText } from './styles';

interface DailyButtonProps {
  day: string;
  isSelected: boolean;
  onPress: () => void;
}

const DayPicker = ({ day, isSelected, onPress }: DailyButtonProps) => {
  return (
    <DayPickerButton isSelected={isSelected} onPress={onPress}>
      <DayPickerButtonText isSelected={isSelected}>{day}</DayPickerButtonText>
    </DayPickerButton>
  );
};

export default DayPicker;
