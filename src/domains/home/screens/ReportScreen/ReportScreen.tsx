import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, GREY600, MAIN, WHITE } from '../../../../constants/colors';
import {
  Bold16,
  Medium14,
  Medium16,
  Medium18,
  Regular11,
  Regular12,
} from '../../../../components/Typography/Typography';
import {
  ItemContainer,
  WeeklyContainer,
  ReportContainer,
  Period,
  ReportTitle,
  ArrowContainer,
  Container,
  Header,
  SelectYear,
  SelectMonth,
  ListContainer,
  ListTitle,
} from './ReportScreen.style';
import { RootStackParamList } from '../../../../types/navigation';

const Item = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    // List 패딩 전체 마진 혹은 패딩 8
    <ItemContainer onPress={() => navigation.navigate('ReportDetail')}>
      <WeeklyContainer>
        <Medium18 color={BLACK}>4</Medium18>
        <Regular11 color={BLACK}>주차</Regular11>
      </WeeklyContainer>
      <ReportContainer>
        <Period>
          <Regular12 color={GREY600}>2023. 9. 25 ~ 9. 30</Regular12>
        </Period>
        <ReportTitle>
          <Medium16 color={BLACK}>9월 4주차 리포트</Medium16>
        </ReportTitle>
      </ReportContainer>
      <ArrowContainer>
        <Medium14 color={BLACK}>{'>'}</Medium14>
      </ArrowContainer>
    </ItemContainer>
  );
};

const ReportScreen = () => {
  return (
    <Screen
      title="리포트"
      isHeaderShown
      headerColor={MAIN}
      titleColor={WHITE}
      isBackButtonShown={false}
    >
      <Container>
        <Header>
          <SelectYear>
            <Bold16 color={WHITE}>2023년</Bold16>
          </SelectYear>
          <SelectMonth>
            <Bold16 color={WHITE}>전체</Bold16>
          </SelectMonth>
        </Header>
        <ListContainer>
          <ListTitle>
            <Bold16 color={BLACK}>2023년 9월</Bold16>
          </ListTitle>
          <Item />
        </ListContainer>
      </Container>
    </Screen>
  );
};

export default ReportScreen;
