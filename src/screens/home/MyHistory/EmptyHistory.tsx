import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getTrashCanHistory, TrashCanHistoryResponseListType } from '@services/api/trashService';
import { scale } from '@utils/platform';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { months, years } from '@screens/home/MyHistory/index';
import DatePicker from '@components/DatePicker';
import { EmptyHistoryItem } from '@screens/home/MyHistory/EmptyHistoryItem';

import { Container } from '@screens/home/MyHistory/styles';
import { isEmpty } from 'lodash';
import { checkDateChanged } from '@utils/common';
import moment from 'moment';

interface EmptyHistoryProps {
  selected: boolean;
}

const EmptyHistory = ({ selected }: EmptyHistoryProps) => {
  const [year, setYear] = useState(years[0]);
  const [month, setMonth] = useState(months[0]);

  const currentDate = useRef('');

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['empty', year, month],
    queryFn: async ({ pageParam }): Promise<TrashCanHistoryResponseListType> => {
      const date = month.value === '-1' ? year.value : `${year.value}-${month.value}`;
      const trashCanHistoryResponseListType = await getTrashCanHistory({ page: pageParam, date });
      const trashCanHistoryResponseList =
        trashCanHistoryResponseListType.trashCanHistoryResponseList.map(item => ({
          ...item,
          isDateChanged: checkDateChanged(currentDate, moment(item.createdAt).format('YYYYMM')),
        }));
      return { ...trashCanHistoryResponseListType, trashCanHistoryResponseList };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  if (isEmpty(data?.pages[0].trashCanHistoryResponseList)) currentDate.current = '';

  return (
    <Container selected={selected}>
      <DatePicker year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <FlatList
        data={data?.pages.flatMap(value => value.trashCanHistoryResponseList)}
        renderItem={({ item }) => <EmptyHistoryItem item={item} />}
        onEndReachedThreshold={0.8}
        onEndReached={() => hasNextPage && fetchNextPage()}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: scale(24) }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={isLoading ? <Spinner /> : <NoTrash />}
      />
    </Container>
  );
};

export default EmptyHistory;
