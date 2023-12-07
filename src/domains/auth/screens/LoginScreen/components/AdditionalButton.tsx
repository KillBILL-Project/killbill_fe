import React from 'react';
import { AdditionalButtonText, AdditionalTouchable } from './AdditionalButton.style';

interface AdditionalButtonProps {
  onPress: () => void;
  title: string;
}

const AdditionalButton = ({ onPress, title }: AdditionalButtonProps) => {
  return (
    <AdditionalTouchable>
      <AdditionalButtonText onPress={onPress}>{title}</AdditionalButtonText>
    </AdditionalTouchable>
  );
};

export default AdditionalButton;
