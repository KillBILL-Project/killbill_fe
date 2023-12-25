import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { MAIN, GREY400, PRIMARY } from '../../../../constants/colors';
import { BaseButtonIcon, BaseButtonTitle, BaseTouchable } from './BaseButton.style';
import BaseIcon from '../../../../components/Icon/BaseIcon';
import { Bold18 } from '../../../../components/Typography/Typography';

interface LoginButtonProps {
  text: string;
  onPress: () => Promise<void> | void;
  backgroundColor?: string;
  color?: string;
  icon?: ImageSourcePropType;
}

const BaseButton = ({
  text,
  onPress,
  backgroundColor = PRIMARY,
  color = MAIN,
  icon,
}: LoginButtonProps) => {
  return (
    <BaseTouchable onPress={onPress} backgroundColor={backgroundColor} borderColor={GREY400}>
      {icon != null && (
        <BaseButtonIcon>
          <BaseIcon size="15px" image={icon} />
        </BaseButtonIcon>
      )}
      <BaseButtonTitle>
        <Bold18 color={color}>{text}</Bold18>
      </BaseButtonTitle>
    </BaseTouchable>
  );
};

export default BaseButton;
