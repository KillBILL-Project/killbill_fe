import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../../../types/navigation';
import {
  ArrowContainer,
  ItemContainer,
  Period,
  ReportContainer,
  ReportTitle,
  WeeklyContainer,
} from './Item.style';
import {
  Medium14,
  Medium16,
  Medium18,
  Regular11,
  Regular12,
} from '../../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../../constants/colors';

const Item = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
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

export default Item;
