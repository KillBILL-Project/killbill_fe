import React, { useRef } from 'react';
import moment from 'moment/moment';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import {
  getTrashCanHistory,
  TrashCanHistoryResponseListType,
  TrashCanHistoryType,
} from '../../../../../../services/api/trashService';
import Separator from '../../../../../../components/Separator';
import DateLabel from '../../../components/DateLabel';
import HistoryItem from '../../../components/HistoryItem';
import { Regular14, Regular16 } from '../../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../../constants/colors';
import Spacer from '../../../../../../components/Spacer';
import { Container } from './EmptyHistory.style';

interface EmptyHistoryProps {
  selected: boolean;
}

const EmptyHistory = ({ selected }: EmptyHistoryProps) => {
  const ym = useRef('');

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['empty'],
    queryFn: async ({ pageParam }): Promise<TrashCanHistoryResponseListType> => {
      const response = await getTrashCanHistory({ page: pageParam });
      return response.data.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  const renderEmptyHistory = (item: TrashCanHistoryType) => {
    const currentTime = moment(item.createdAt);
    const currentYm = currentTime.format('YYYYMM');
    const isEqualYm = currentYm === ym.current;
    if (!isEqualYm) ym.current = currentYm;

    return (
      <>
        {isEqualYm ? (
          <Separator horizontal length="100%" margin={0} />
        ) : (
          <DateLabel year={currentTime.format('YYYY')} month={currentTime.format('M')} />
        )}
        <HistoryItem text={{ top: currentTime.format('D'), bottom: currentTime.format('ddd') }}>
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
  };

  if (isLoading) return <ActivityIndicator />;

  return (
    <Container selected={selected}>
      <FlatList
        data={data?.pages.flatMap(value => value.trashCanHistoryResponseList)}
        renderItem={({ item }) => renderEmptyHistory(item)}
        onEndReachedThreshold={0.8}
        onEndReached={() => hasNextPage && fetchNextPage()}
      />
    </Container>
  );
};

export default EmptyHistory;
