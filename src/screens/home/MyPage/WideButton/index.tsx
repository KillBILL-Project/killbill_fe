import React from 'react';
import { Image } from 'react-native';
import findRefund from '@assets/icon/myPage/find_refund.png';
import { scale } from '@utils/platform';
import { Container, Description, DescriptionText, TextColumn, Title, TitleText } from './styles';

interface WideButtonProps {
  onPress: () => void;
}

const WideButton = ({ onPress }: WideButtonProps) => {
  return (
    <Container onPress={onPress}>
      <TextColumn>
        <Title>
          <TitleText>티끌모아 태산!</TitleText>
        </Title>
        <Description>
          <DescriptionText>환급금을 찾아볼까요?</DescriptionText>
        </Description>
      </TextColumn>
      <Image
        source={findRefund}
        style={{ width: scale(61), height: scale(61) }}
        resizeMode="contain"
      />
    </Container>
  );
};

export default WideButton;
