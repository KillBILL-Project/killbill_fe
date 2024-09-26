import React from 'react';
import Screen from '@components/Screen';
import {
  AcquiredToken,
  AcquiredTokenText,
  Container,
  ImageSection,
  Log,
  LogText,
  Title,
  TitleText,
  TokenIssuedImage,
} from '@screens/home/TokenIssued/style';
import ConfirmButton from '@screens/home/Question/BottomButton';
import { BLACK, WHITE } from '@constants/colors';
import tokenIssued from '@assets/image/quiz/token_issued.png';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackParamList, HomeTabParamList } from '@type/navigation';

const TokenIssuedScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'TokenIssued'>>();
  const { reset, navigate } = useNavigation<NavigationProp<HomeTabParamList>>();

  const handleConfirmButtonPress = () => {
    navigate('Quiz');

    reset({
      index: 0,
      routes: [{ name: 'Quiz' }],
    });
  };

  return (
    <Screen
      isBackButtonShown={false}
      headerColor={BLACK}
      title="블록체인 인증완료"
      titleColor={WHITE}
    >
      <Container>
        <Title>
          <TitleText>CREDIT 발급 완료!</TitleText>
        </Title>
        <ImageSection>
          <AcquiredToken>
            <AcquiredTokenText>{`+${params.issuedTokenValue.toFixed(2)}`}</AcquiredTokenText>
          </AcquiredToken>
          <TokenIssuedImage source={tokenIssued} />
        </ImageSection>
        <Log>
          <LogText>{`(인증)탄소절감량을 ${params.validatedActiveLog.value.toFixed(2)}kgCO2 기록했습니다.`}</LogText>
          <LogText>{`(기록)탄소절감량을 ${params.recordedActiveLog.value.toFixed(2)}kgCO2 기록했습니다.`}</LogText>
        </Log>
      </Container>
      <ConfirmButton buttonText="확인" onPress={handleConfirmButtonPress} />
    </Screen>
  );
};

export default TokenIssuedScreen;
