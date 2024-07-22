import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Medium14 } from '@components/Typography';
import { scale } from '@utils/platform';
import { Container, Title } from './styles';

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
          marginVertical: scale(6),
          marginHorizontal: scale(40),
        }}
        resizeMode="contain"
      />
      <Title>
        <Medium14 color="#1C1C1E">{title}</Medium14>
      </Title>
    </Container>
  );
};

export default TopMenuButton;
