import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { HeaderButtonIcon, HeaderTouchable } from './HeaderButton.style';

interface HeaderButtonProps {
  margin: number;
  padding: number;
  height: number;
  width: number;
  rotate?: number;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

const HeaderButton = ({
  margin,
  padding,
  height,
  width,
  rotate,
  icon,
  onPress,
}: HeaderButtonProps) => {
  return (
    <HeaderTouchable margin={margin} padding={padding} onPress={onPress}>
      <HeaderButtonIcon height={height} width={width} rotate={rotate} source={icon} />
    </HeaderTouchable>
  );
};

export default HeaderButton;
