import React, { useState } from 'react';
import moment from 'moment/moment';
import { FlatList, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BLACK, GREY600 } from '@constants/colors';
import { getTrashCanHistory, TrashCanHistoryResponseListType } from '@services/api/trashService';
import { Regular14, Regular16 } from '@components/Typography';
import { scale } from '@utils/platform';
import DateLabel from '@components/DateLabel';
import HistoryItem from '@components/HistoryItem';
import Separator from '@components/Separator';
import Spacer from '@components/Spacer';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { months } from '@screens/home/MyHistory';
import DatePicker from '@components/DatePicker';
import { Container } from './styles';

interface EmptyHistoryProps {
  selected: boolean;
}

const EmptyHistory = ({ selected }: EmptyHistoryProps) => {
  const [year, setYear] = useState('2024');
  const [month, setMonth] = useState(months[0]);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['empty', year, month],
    queryFn: async ({ pageParam }): Promise<TrashCanHistoryResponseListType> => {
      const date = month.value === '-1' ? year : `${year}-${month.value}`;

      const response = await getTrashCanHistory({ page: pageParam, date });
      const trashCanHistoryResponse = response.data.data;
      const { trashCanHistoryResponseList } = trashCanHistoryResponse;

      let currentDate = '';

      const newTrashCanHistoryResponseList = trashCanHistoryResponseList.map(trashCanHistory => {
        const newTrashCanHistory = { ...trashCanHistory };
        const createdDate = moment(trashCanHistory.createdAt).format('YYYYMM');

        if (createdDate === currentDate) newTrashCanHistory.isEqualDate = true;
        if (createdDate !== currentDate) currentDate = createdDate;
        return newTrashCanHistory;
      });

      return {
        ...trashCanHistoryResponse,
        trashCanHistoryResponseList: newTrashCanHistoryResponseList,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  return (
    <Container selected={selected}>
      <DatePicker year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <FlatList
        data={data?.pages.flatMap(value => value.trashCanHistoryResponseList)}
        renderItem={({ item }) => {
          const date = moment(item.createdAt);
          return (
            <>
              {item.isEqualDate ? (
                <Separator horizontal length="100%" margin={0} />
              ) : (
                <DateLabel year={date.format('YYYY')} month={date.format('M')} />
              )}
              <HistoryItem text={{ top: date.format('D'), bottom: date.format('ddd') }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Regular14 color={GREY600}>탄소 절감량</Regular14>
                  <Spacer width={10} />
                  <Regular16 color={BLACK}>{`${item.carbonSaving.toFixed(4)}gCO2`}</Regular16>
                </View>
                <Spacer height={4} />
                <View style={{ flexDirection: 'row' }}>
                  <Regular14 color={GREY600}>예상 환급금</Regular14>
                  <Spacer width={10} />
                  <Regular16 color={BLACK}>{`${item.refund.toLocaleString()}원`}</Regular16>
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

export default EmptyHistory;
