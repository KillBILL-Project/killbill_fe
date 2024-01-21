import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { HeaderButtonIcon, HeaderTouchable } from './HeaderButton.style';

interface HeaderButtonProps {
  padding: number;
  height: number;
  width: number;
  backButtonColor?: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

const HeaderButton = ({
  padding,
  height,
  width,
  backButtonColor,
  icon,
  onPress,
}: HeaderButtonProps) => {
  return (
    <HeaderTouchable padding={padding} onPress={onPress}>
      <HeaderButtonIcon
        height={height}
        width={width}
        source={icon}
        style={backButtonColor ? { tintColor: backButtonColor } : {}}
      />
    </HeaderTouchable>
  );
};

export default HeaderButton;
