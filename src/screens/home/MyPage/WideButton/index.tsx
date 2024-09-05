import React from 'react';
import { Image } from 'react-native';
import findRefund from '@assets/icon/myPage/find_refund.png';
import { WHITE } from '@constants/colors';
import { Regular14, Semibold18 } from '@components/Typography';
import { scale } from '@utils/platform';
import Spacer from '@components/Spacer';
import { Container, Description, TextContainer, Title } from './styles';

interface WideButtonProps {
  onPress: () => void;
}

const WideButton = ({ onPress }: WideButtonProps) => {
  return (
    <Container onPress={onPress}>
      <TextContainer>
        <Title>
          <Semibold18 color={WHITE}>티끌모아 태산!</Semibold18>
        </Title>
        <Spacer height={5} />
        <Description>
          <Regular14 color={WHITE}>환급금을 찾아볼까요?</Regular14>
        </Description>
      </TextContainer>
      <Image
        source={findRefund}
        style={{ width: scale(61), height: scale(61) }}
        resizeMode="contain"
      />
    </Container>
  );
};

export default WideButton;
