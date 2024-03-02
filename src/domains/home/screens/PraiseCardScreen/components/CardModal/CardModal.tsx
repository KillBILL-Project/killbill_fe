import React from 'react';
import { Image, View } from 'react-native';
import { Bold18, Medium16 } from '../../../../../../components/Typography';
import { BLACK, GREY700, MAIN, PRIMARY, WHITE } from '../../../../../../constants/colors';

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
import { ComplimentCardType } from '../../../../../../services/api/complimentService';
import Screen from '../../../../../../components/Screen';

interface CardModalProps {
  cardInfo: ComplimentCardType;
  onPressClose: () => void;
}

const CardModal = ({ cardInfo, onPressClose }: CardModalProps) => {
  return (
    <>
      <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Image
          source={{ uri: cardInfo.cardImage }}
          resizeMode="cover"
          style={{ height: '100%' }}
          blurRadius={16}
        />
      </View>
      <Screen backgroundColor="transparent">
        <Container>
          <CardContainer>
            <CardImage>
              <Image
                source={{ uri: cardInfo.cardImage }}
                resizeMode="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </CardImage>
            <Title>
              <TitleText>{cardInfo.title}</TitleText>
            </Title>
            <Content>
              <Medium16 color={WHITE}>{cardInfo.contents}</Medium16>
            </Content>
          </CardContainer>
          <ButtonContainer>
            <Button>
              <Bold18 color={PRIMARY}>공유</Bold18>
            </Button>
            <Button backgroundColor={PRIMARY} onPress={onPressClose}>
              <Bold18 color={BLACK}>확인</Bold18>
            </Button>
          </ButtonContainer>
        </Container>
      </Screen>
    </>
  );
};

export default CardModal;
