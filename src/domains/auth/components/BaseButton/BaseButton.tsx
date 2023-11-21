import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { GREY_3 } from '../../../../constants/colors';
import {
  BaseButtonIcon,
  BaseButtonTitle,
  BaseButtonTitleText,
  BaseTouchable,
} from './BaseButton.style';

interface LoginButtonProps {
  text: string;
  onPress: () => Promise<void> | void;
  backgroundColor: string;
  color: string;
  icon?: ImageSourcePropType;
}

const BaseButton = ({ text, onPress, backgroundColor, color, icon }: LoginButtonProps) => {
  return (
    <BaseTouchable onPress={onPress} backgroundColor={backgroundColor} borderColor={GREY_3}>
      {icon != null && (
        <BaseButtonIcon>
          <Image source={icon} />
        </BaseButtonIcon>
      )}
      <BaseButtonTitle>
        <BaseButtonTitleText color={color}>{text}</BaseButtonTitleText>
      </BaseButtonTitle>
    </BaseTouchable>
  );
};

export default BaseButton;
