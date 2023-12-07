import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { IconStyled } from './Icon.style';

interface BaseIconProps {
  size: string;
  image: ImageSourcePropType;
}

const BaseIcon = ({ size, image }: BaseIconProps) => {
  return <IconStyled size={size} source={image} />;
};

export default BaseIcon;
