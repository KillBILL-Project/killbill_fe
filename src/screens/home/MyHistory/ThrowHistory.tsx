import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getTrashLog, TrashLogResponseListType } from '@services/api/trashService';
import { scale } from '@utils/platform';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { months, years } from '@screens/home/MyHistory/index';
import DatePicker from '@components/DatePicker';
import ThrowHistoryItem from '@screens/home/MyHistory/ThrowHistoryItem';
import { Container } from '@screens/home/MyHistory/styles';
import { checkDateChanged } from '@utils/common';
import moment from 'moment';

interface ThrowHistoryProps {
  selected: boolean;
}

const ThrowHistory = ({ selected }: ThrowHistoryProps) => {
  const [year, setYear] = useState(years[0]);
  const [month, setMonth] = useState(months[0]);

  const currentDate = useRef('');

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['throw', year, month],
    queryFn: async ({ pageParam }): Promise<TrashLogResponseListType> => {
      const date = month.value === '-1' ? year.value : `${year.value}-${month.value}`;
      const trashLog = await getTrashLog({ page: pageParam, date });
      const trashLogResponseList = trashLog.trashLogResponseList.map(item => ({
        ...item,
        isDateChanged: checkDateChanged(currentDate, moment(item.createdAt).format('YYYYMMDD')),
      }));
      return { ...trashLog, trashLogResponseList };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  if (data?.pages[0].totalCount === 0) currentDate.current = '';

  return (
    <Container selected={selected}>
      <DatePicker year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <FlatList
        data={data?.pages.flatMap(value => value.trashLogResponseList)}
        renderItem={({ item }) => <ThrowHistoryItem item={item} />}
        onEndReachedThreshold={0.8}
        onEndReached={() => hasNextPage && fetchNextPage()}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: scale(24) }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={isLoading ? <Spinner /> : <NoTrash />}
      />
    </Container>
  );
};

export default ThrowHistory;
