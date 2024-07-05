import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { toString } from 'lodash';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BLACK, MAIN, WHITE } from '@constants/colors';
import { Bold16 } from '@components/Typography';
import { getWeeklyReport } from '@services/api/reportService';
import { ReportResponseType, ReportType, WeekInfoType } from '@type/report';
import { scale } from '@utils/platform';
import Screen from '@components/Screen';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { months } from '@screens/home/MyHistory';
import DatePicker from '@components/DatePicker';
import { Container, Header, ListContainer, ListTitle } from './styles';
import ReportItem from './ReportItem';

const ReportScreen = () => {
  const [year, setYear] = useState('2024');
  const [month, setMonth] = useState(months[0]);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['report', year, month],
    queryFn: async ({ pageParam }): Promise<ReportResponseType> => {
      const date = month.value === '-1' ? year : `${year}-${month.value}`;

      const response = await getWeeklyReport({ page: pageParam, date });
      let currentMonth: WeekInfoType;

      const reportResponse = response.data.data;
      const { weeklyReportResponseList } = reportResponse;

      const newWeeklyReportResponseList = weeklyReportResponseList.map(report => {
        const newReport = { ...report };

        const isEqualMonth =
          currentMonth?.month === newReport.weekInfo.month &&
          currentMonth?.year === newReport.weekInfo.year;

        if (!isEqualMonth) {
          // isChanged 라는 조건을 통해 달을 구분
          newReport.weekInfo.isChanged = true;
          currentMonth = { ...newReport.weekInfo };
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

  const render = (item: ReportType) => {
    if (!item.weekInfo.isChanged) return <ReportItem report={item} />;

    return (
      <>
        <ListTitle>
          <Bold16 color={BLACK}>{`${item.weekInfo.year}년 ${item.weekInfo.month}월`}</Bold16>
        </ListTitle>
        <ReportItem report={item} />
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
          <DatePicker
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            color={WHITE}
            paddingVertical={16}
          />
        </Header>
        <ListContainer>
          <FlatList
            data={data?.pages.flatMap(value => value.weeklyReportResponseList)}
            renderItem={({ item }) => render(item)}
            onEndReachedThreshold={0.8}
            onEndReached={() => hasNextPage && fetchNextPage()}
            keyExtractor={item => toString(item.weeklyReportId)}
            contentContainerStyle={{ flexGrow: 1, margin: scale(24) }}
            ListEmptyComponent={isLoading ? <Spinner /> : <NoTrash />}
          />
        </ListContainer>
      </Container>
    </Screen>
  );
};

export default ReportScreen;
