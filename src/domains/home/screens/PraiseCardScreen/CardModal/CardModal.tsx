import React from 'react';
import { Bold18, Medium16 } from '../../../../../components/Typography';
import { GREY700, MAIN } from '../../../../../constants/colors';
import card from '../../../../../assets/image/card_sample.png';

import {
  Button,
  ButtonContainer,
  CardContainer,
  CardImage,
  Container,
  Content,
  Title,
  TitleText,
} from './CardModal.style';

interface CardModalProps {
  onPressClose: () => void;
}

const CardModal = ({ onPressClose }: CardModalProps) => {
  return (
    <Container>
      <CardContainer>
        <CardImage source={card} />
        <Title>
          <TitleText>환경운동가</TitleText>
        </Title>
        <Content>
          <Medium16 color={GREY700}>SNS로 App 및 칭찬카드 공유 1회 이상</Medium16>
        </Content>
      </CardContainer>
      <ButtonContainer>
        <Button>
          <Bold18 color={MAIN}>공유</Bold18>
        </Button>
        <Button onPress={onPressClose}>
          <Bold18 color={MAIN}>확인</Bold18>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default CardModal;
