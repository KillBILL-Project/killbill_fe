import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Icon } from './styles';

interface BaseIconProps {
  size: number;
  icon: ImageSourcePropType;
  color?: string;
}

const BaseIcon = ({ size, icon, color }: BaseIconProps) => {
  return <Icon size={size} source={icon} style={color ? { tintColor: color } : {}} />;
};

export default BaseIcon;
