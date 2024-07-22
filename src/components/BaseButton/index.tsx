import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { MAIN, GREY400, PRIMARY } from '@constants/colors';
import { Bold18 } from '@components/Typography';
import BaseIcon from '@components/BaseIcon';
import { BaseButtonIcon, BaseButtonTitle, BaseTouchable } from './styles';

interface LoginButtonProps {
  text: string;
  onPress: () => Promise<void> | void;
  backgroundColor?: string;
  color?: string;
  icon?: ImageSourcePropType;
  marginBottom?: number;
}

const BaseButton = ({
  text,
  onPress,
  backgroundColor = PRIMARY,
  color = MAIN,
  icon,
  marginBottom,
}: LoginButtonProps) => {
  return (
    <BaseTouchable
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderColor={GREY400}
      marginBottom={marginBottom}
    >
      {icon != null && (
        <BaseButtonIcon>
          <BaseIcon size={15} icon={icon} />
        </BaseButtonIcon>
      )}
      <BaseButtonTitle>
        <Bold18 color={color}>{text}</Bold18>
      </BaseButtonTitle>
    </BaseTouchable>
  );
};

export default BaseButton;
