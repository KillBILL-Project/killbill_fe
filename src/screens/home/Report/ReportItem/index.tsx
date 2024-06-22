import React, { useMemo } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import moment from 'moment/moment';
import arrow from '@assets/icon/arrow-right-black.png';
import { BLACK, GREY600 } from '@constants/colors';
import { HomeStackParamList } from '@type/navigation';
import { Medium16, Regular12 } from '@components/Typography';
import { ReportType } from '@type/report';
import { LeftIcon } from '@components/HistoryItem/styles';
import {
  ArrowContainer,
  ItemContainer,
  Period,
  ReportContainer,
  ReportTitle,
  WeekNumber,
  WeekText,
} from './styles';

interface ReportProps {
  report: ReportType;
}

const ReportItem = ({ report }: ReportProps) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const fromDate = useMemo(() => moment(report.fromDate).format('YYYY. M. DD'), [report.fromDate]);
  const toData = useMemo(() => moment(report.toDate).format('M. DD'), [report.toDate]);

  const reportTitle = `${report.weekInfo.month}월 ${report.weekInfo.weekOfMonth}주차 리포트`;

  return (
    <ItemContainer
      onPress={() =>
        navigation.navigate('ReportDetail', { weeklyReportId: report.weeklyReportId, reportTitle })
      }
    >
      <LeftIcon>
        <WeekNumber>{report.weekInfo.weekOfMonth}</WeekNumber>
        <WeekText>주차</WeekText>
      </LeftIcon>
      <ReportContainer>
        <Period>
          <Regular12 color={GREY600}>{`${fromDate} ~ ${toData}`}</Regular12>
        </Period>
        <ReportTitle>
          <Medium16 color={BLACK}>{reportTitle}</Medium16>
        </ReportTitle>
      </ReportContainer>
      <ArrowContainer>
        <Image source={arrow} style={{ width: 20, height: 20 }} />
      </ArrowContainer>
    </ItemContainer>
  );
};

export default ReportItem;
