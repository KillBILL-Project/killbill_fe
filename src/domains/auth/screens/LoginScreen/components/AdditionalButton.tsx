import React from 'react';
import { AdditionalTouchable } from './AdditionalButton.style';
import { Regular14 } from '../../../../../components/Typography/Typography';
import { GREY700 } from '../../../../../constants/colors';

interface AdditionalButtonProps {
  onPress: () => void;
  title: string;
}

const AdditionalButton = ({ onPress, title }: AdditionalButtonProps) => {
  return (
    <AdditionalTouchable onPress={onPress}>
      <Regular14 color={GREY700}>{title}</Regular14>
    </AdditionalTouchable>
  );
};

export default AdditionalButton;
