import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { toString } from 'lodash';
import { useInfiniteQuery } from '@tanstack/react-query';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, MAIN, WHITE } from '../../../../constants/colors';
import { Bold16 } from '../../../../components/Typography';
import { Container, Header, ListContainer, ListTitle } from './ReportScreen.style';
import Report from './components/Report/Report';
import { getWeeklyReport } from '../../../../services/api/reportService';
import { ReportResponseType, ReportType, WeekInfoType } from '../../../../types/report';
import { isIOS, ratio } from '../../../../utils/platform';
import Picker from '../components/Picker';

const ReportScreen = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('-1');
  const [yearForIos, setYearForIos] = useState(selectedYear);
  const [monthForIos, setMonthForIos] = useState(selectedMonth);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['report', isIOS ? yearForIos : selectedYear, isIOS ? monthForIos : selectedMonth],
    queryFn: async ({ pageParam }): Promise<ReportResponseType> => {
      const month = isIOS ? monthForIos : selectedMonth;
      const year = isIOS ? yearForIos : selectedYear;
      const date = month === '-1' ? year : `${year}-${month}`;

      const response = await getWeeklyReport({ page: pageParam, date });
      let currentMonth: WeekInfoType;

      const reportResponse = response.data.data;
      const { weeklyReportResponseList } = reportResponse;

      const newWeeklyReportResponseList = weeklyReportResponseList.map(report => {
        const newReport = { ...report };

        const isEqualMonth =
          currentMonth?.month === report.weekInfo.month &&
          currentMonth?.year === report.weekInfo.year;

        if (!isEqualMonth) {
          // isChanged 라는 조건을 통해 달을 구분
          report.weekInfo.isChanged = true;
          currentMonth = { ...report.weekInfo };
        }

        return newReport;
      });

      return {
        hasNext: reportResponse.hasNext,
        weeklyReportResponseList: newWeeklyReportResponseList,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  const onChangeYear = (value: string) => setSelectedYear(value);
  const onCloseYear = () => setYearForIos(selectedYear);
  const onChangeMonth = (value: string) => setSelectedMonth(value);
  const onCloseMonth = () => setMonthForIos(selectedMonth);

  const render = (item: ReportType) => {
    if (!item.weekInfo.isChanged) return <Report report={item} />;

    return (
      <>
        <ListTitle>
          <Bold16 color={BLACK}>{`${item.weekInfo.year}년 ${item.weekInfo.month}월`}</Bold16>
        </ListTitle>
        <Report report={item} />
      </>
    );
  };

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
          <Picker
            type="YEAR"
            color={WHITE}
            selectedValue={selectedYear}
            onValueChange={onChangeYear}
            onClose={onCloseYear}
          />
          <Picker
            type="MONTH"
            color={WHITE}
            selectedValue={selectedYear}
            onValueChange={onChangeMonth}
            onClose={onCloseMonth}
          />
        </Header>
        <ListContainer>
          <FlatList
            data={data?.pages.flatMap(value => value.weeklyReportResponseList)}
            renderItem={({ item }) => render(item)}
            keyExtractor={item => toString(item.weeklyReportId)}
            contentContainerStyle={{ flexGrow: 1, margin: ratio * 24 }}
          />
        </ListContainer>
      </Container>
    </Screen>
  );
};

export default ReportScreen;
