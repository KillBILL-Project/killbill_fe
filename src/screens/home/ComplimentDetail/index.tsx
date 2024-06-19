import React from 'react';
import { Image } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BLACK, PRIMARY, WHITE } from '@constants/colors';
import { Bold18, Medium16 } from '@components/Typography';

import { CardDetailParamList } from '@type/navigation';
import Screen from '@components/Screen';
import {
  BackgroundContainer,
  Button,
  ButtonContainer,
  CardContainer,
  CardImage,
  Container,
  Content,
  Title,
  TitleText,
} from './styles';

const ComplimentDetailScreen = () => {
  const { goBack } = useNavigation();
  const { params: cardInfo } = useRoute<RouteProp<CardDetailParamList, 'CardDetail'>>();

  return (
    <>
      <BackgroundContainer>
        <Image
          source={{ uri: cardInfo.cardImage }}
          resizeMode="cover"
          style={{ height: '100%' }}
          blurRadius={16}
        />
      </BackgroundContainer>
      <Screen backgroundColor="transparent" backButtonColor={WHITE}>
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
            {/* 공유기능 넣으면 살리기 */}
            {/* <Button> */}
            {/*   <Bold18 color={PRIMARY}>공유</Bold18> */}
            {/* </Button> */}
            <Button backgroundColor={PRIMARY} onPress={() => goBack()}>
              <Bold18 color={BLACK}>확인</Bold18>
            </Button>
          </ButtonContainer>
        </Container>
      </Screen>
    </>
  );
};

export default ComplimentDetailScreen;
