import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Spacer from '../../../../../../components/Spacer/Spacer';
import { Medium14 } from '../../../../../../components/Typography/Typography';
import { Container, Icon, Title } from './TopMenuButton.style';

interface TopMenuButtonProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const TopMenuButton = ({ title, icon, onPress }: TopMenuButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Icon source={icon} />
      <Spacer height={6} />
      <Title>
        <Medium14 color="#1C1C1E">{title}</Medium14>
      </Title>
    </Container>
  );
};

export default TopMenuButton;
