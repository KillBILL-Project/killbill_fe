import React, { useMemo } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';
import { BLACK, GREY600 } from '@constants/colors';
import { HomeStackParamList } from '@type/navigation';
import { Bold16, Medium16, Regular12 } from '@components/Typography';
import { ReportType } from '@type/report';
import HistoryItem from '@screens/home/MyHistory/HistoryItem';
import { ListTitle, Period, ReportContent, ReportTitle, WeekNumber, WeekText } from './styles';

interface ReportItemProps {
  report: ReportType;
}

const ReportItem = ({ report }: ReportItemProps) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const fromDate = useMemo(() => moment(report.fromDate).format('YYYY. M. DD'), [report.fromDate]);
  const toData = useMemo(() => moment(report.toDate).format('M. DD'), [report.toDate]);

  const reportTitle = useMemo(() => {
    return `${report.weekInfo.month}월 ${report.weekInfo.weekOfMonth}주차 리포트`;
  }, [report.weekInfo.month, report.weekInfo.weekOfMonth]);

  const navigateReportDetail = () => {
    navigation.navigate('ReportDetail', {
      weeklyReportId: report.weeklyReportId,
      reportTitle,
    });
  };

  return (
    <>
      {report.isDateChanged ? (
        <ListTitle>
          <Bold16 color={BLACK}>{`${report.weekInfo.year}년 ${report.weekInfo.month}월`}</Bold16>
        </ListTitle>
      ) : null}
      <HistoryItem
        touchable
        onPress={navigateReportDetail}
        cardComponent={
          <>
            <WeekNumber>{report.weekInfo.weekOfMonth}</WeekNumber>
            <WeekText>주차</WeekText>
          </>
        }
      >
        <ReportContent>
          <Period>
            <Regular12 color={GREY600}>{`${fromDate} ~ ${toData}`}</Regular12>
          </Period>
          <ReportTitle>
            <Medium16 color={BLACK}>{reportTitle}</Medium16>
          </ReportTitle>
        </ReportContent>
      </HistoryItem>
    </>
  );
};

export default ReportItem;
