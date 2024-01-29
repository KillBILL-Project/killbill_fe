import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, Icon, Title } from './MenuButton.style';
import { Medium16 } from '../../../../../components/Typography';
import Spacer from '../../../../../components/Spacer/Spacer';
import arrowIcon from '../../../../../assets/icon/arrow.png';

import { BLACK } from '../../../../../constants/colors';

interface MenuButtonProps {
  title: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
}

const MenuButton = ({ title, icon, onPress }: MenuButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Title>
        <Medium16 color={BLACK}>{title}</Medium16>
      </Title>
      <Spacer height={5} />
      <Icon source={icon ?? arrowIcon} width={61} height={61} />
    </Container>
  );
};

export default MenuButton;
