import React from 'react';
import { GREY500, WHITE } from '@constants/colors';
import { Medium14 } from '@components/Typography';
import { Container } from './styles';

interface DailyButtonProps {
  day: string;
  isSelected: boolean;
  onPress: () => void;
}

const DailyButton = ({ day, isSelected, onPress }: DailyButtonProps) => {
  return (
    <Container isSelected={isSelected} onPress={onPress}>
      <Medium14 color={isSelected ? WHITE : GREY500}>{day}</Medium14>
    </Container>
  );
};

export default DailyButton;
