import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Regular14 } from '../../../../../components/Typography/Typography';
import { GREY700 } from '../../../../../constants/colors';

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
