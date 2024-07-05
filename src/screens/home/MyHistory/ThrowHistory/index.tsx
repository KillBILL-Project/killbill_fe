import React, { useState } from 'react';
import moment from 'moment/moment';
import { FlatList, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BLACK, GREY600 } from '@constants/colors';
import { Regular14, Regular16 } from '@components/Typography';
import { getTrashLog, TrashLogResponseListType } from '@services/api/trashService';
import { scale } from '@utils/platform';
import { convertTimeFullDate } from '@utils/common';
import DateLabel from '@components/DateLabel';
import HistoryItem from '@components/HistoryItem';
import Separator from '@components/Separator';
import Spacer from '@components/Spacer';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { months } from '@screens/home/MyHistory';
import DatePicker from '@components/DatePicker';
import { Container } from './styles';

interface ThrowHistoryProps {
  selected: boolean;
}

const ThrowHistory = ({ selected }: ThrowHistoryProps) => {
  const [year, setYear] = useState('2024');
  const [month, setMonth] = useState(months[0]);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['throw', year, month],
    queryFn: async ({ pageParam }): Promise<TrashLogResponseListType> => {
      const date = month.value === '-1' ? year : `${year}-${month.value}`;

      const response = await getTrashLog({ page: pageParam, date });
      const trashLogResponse = response.data.data;
      const { trashLogResponseList } = trashLogResponse;

      let currentDate = '';

      const newTrashLogResponseList = trashLogResponseList.map(trashLog => {
        const newTrashLog = { ...trashLog };
        const createdDate = moment(trashLog.createdAt).format('YYYYMMDD');
        if (createdDate === currentDate) newTrashLog.isEqualDate = true;
        if (createdDate !== currentDate) currentDate = createdDate;
        return newTrashLog;
      });

      return { ...trashLogResponse, trashLogResponseList: newTrashLogResponseList };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  return (
    <Container selected={selected}>
      <DatePicker year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <FlatList
        data={data?.pages.flatMap(value => value.trashLogResponseList)}
        renderItem={({ item }) => {
          const createdAt = moment(item.createdAt);
          return (
            <>
              {item.isEqualDate ? (
                <Separator horizontal length="100%" margin={0} />
              ) : (
                <DateLabel month={createdAt.format('M')} day={createdAt.format('D')} />
              )}
              <HistoryItem icon={item.trashImagePath}>
                <View style={{ justifyContent: 'center' }}>
                  <Regular14 color={GREY600}>{convertTimeFullDate(item.createdAt)}</Regular14>
                  <Spacer width={10} />
                  <Regular16 color={BLACK}>{item.trashCategoryName}</Regular16>
                </View>
              </HistoryItem>
            </>
          );
        }}
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
