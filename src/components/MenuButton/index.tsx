import React from 'react';
import { ImageSourcePropType } from 'react-native';
import arrowIcon from '@assets/icon/arrow.png';
import { Container, Icon, Title, TitleText } from './styles';

interface MenuButtonProps {
  title: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
}

const MenuButton = ({ title, icon, onPress }: MenuButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
      <Icon source={icon ?? arrowIcon} />
    </Container>
  );
};

export default MenuButton;
