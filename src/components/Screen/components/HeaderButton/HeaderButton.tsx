import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { HeaderTouchable } from './HeaderButton.style';
import BaseIcon from '../../../Icon/BaseIcon';

interface HeaderButtonProps {
  padding: number;
  size: number;
  color?: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

const HeaderButton = ({ padding, size, color, icon, onPress }: HeaderButtonProps) => {
  return (
    <HeaderTouchable padding={padding} onPress={onPress}>
      <BaseIcon size={size} icon={icon} color={color} />
    </HeaderTouchable>
  );
};

export default HeaderButton;
