import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { isEmpty, toString } from 'lodash';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MAIN, WHITE } from '@constants/colors';
import { getWeeklyReport } from '@services/api/reportService';
import { ReportResponseType } from '@type/report';
import { scale } from '@utils/platform';
import Screen from '@components/Screen';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { months, years } from '@screens/home/MyHistory';
import DatePicker from '@components/DatePicker';
import { checkDateChanged } from '@utils/common';
import moment from 'moment/moment';
import { Container, Header, ListContainer } from './styles';
import ReportItem from './ReportItem';

const ReportScreen = () => {
  const [year, setYear] = useState(years[0]);
  const [month, setMonth] = useState(months[0]);

  const currentDate = useRef('');

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['report', year, month],
    queryFn: async ({ pageParam }): Promise<ReportResponseType> => {
      const date = month.value === '-1' ? year.value : `${year.value}-${month.value}`;
      const weeklyReport = await getWeeklyReport({ page: pageParam, date });
      const weeklyReportResponseList = weeklyReport.weeklyReportResponseList.map(item => ({
        ...item,
        isDateChanged: checkDateChanged(currentDate, moment(item.toDate).format('YYYYMM')),
      }));
      return { ...weeklyReport, weeklyReportResponseList };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  if (isEmpty(data?.pages[0].weeklyReportResponseList)) currentDate.current = '';

  return (
    <Screen
      title="리포트"
      isHeaderShown
      headerColor={MAIN}
      titleColor={WHITE}
      backButtonColor={WHITE}
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
            renderItem={({ item }) => <ReportItem report={item} />}
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
