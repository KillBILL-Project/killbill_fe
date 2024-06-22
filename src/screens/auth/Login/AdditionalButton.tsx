import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GREY700 } from '@constants/colors';
import { Regular14 } from '@components/Typography';

interface AdditionalButtonProps {
  onPress: () => void;
  title: string;
}

const AdditionalButton = ({ onPress, title }: AdditionalButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Regular14 color={GREY700}>{title}</Regular14>
    </TouchableOpacity>
  );
};

export default AdditionalButton;
