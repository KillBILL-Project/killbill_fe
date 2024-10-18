import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { scale } from '@utils/platform';
import { Container, Title, TitleText } from './styles';

interface TopMenuButtonProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const TopMenuButton = ({ title, icon, onPress }: TopMenuButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: scale(24),
          height: scale(24),
        }}
        resizeMode="contain"
      />
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
    </Container>
  );
};

export default TopMenuButton;
