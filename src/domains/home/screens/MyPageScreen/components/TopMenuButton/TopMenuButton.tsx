import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Medium14 } from '../../../../../../components/Typography';
import { Container, Title } from './TopMenuButton.style';
import { ratio } from '../../../../../../utils/platform';

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
          width: ratio * 24,
          height: ratio * 24,
          marginVertical: ratio * 6,
          marginHorizontal: ratio * 40,
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
