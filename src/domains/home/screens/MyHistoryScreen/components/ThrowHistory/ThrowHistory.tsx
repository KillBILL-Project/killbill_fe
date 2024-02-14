import React, { useCallback, useRef } from 'react';
import moment from 'moment/moment';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import Separator from '../../../../../../components/Separator';
import DateLabel from '../../../components/DateLabel';
import HistoryItem from '../../../components/HistoryItem';
import { Regular14, Regular16 } from '../../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../../constants/colors';
import Spacer from '../../../../../../components/Spacer';
import {
  getTrashLog,
  TrashLogResponseListType,
  TrashLogType,
} from '../../../../../../services/api/trashService';
import { Container } from './ThrowHistory.style';

interface ThrowHistoryProps {
  selected: boolean;
}

// TODO: render 가 여러번 일어나는 이유 찾아내기

const ThrowHistory = ({ selected }: ThrowHistoryProps) => {
  const md = useRef('');

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['throw'],
    queryFn: async ({ pageParam }): Promise<TrashLogResponseListType> => {
      const response = await getTrashLog({ page: pageParam });
      return response.data.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  const renderThrowHistory = useCallback(
    (item: TrashLogType, index: number) => {
      if (index === 0) md.current = '';
      const currentTime = moment(item.createdAt);
      const currentMd = currentTime.format('MMDD');
      const isEqualMd = currentMd === md.current;
      if (!isEqualMd) md.current = currentMd;

      return (
        <>
          {isEqualMd ? (
            <Separator horizontal length="100%" margin={0} />
          ) : (
            <DateLabel month={currentTime.format('M')} day={currentTime.format('D')} />
          )}
          <HistoryItem text={{ top: currentTime.format('D'), bottom: currentTime.format('ddd') }}>
            <View style={{ justifyContent: 'center' }}>
              <Regular14 color={GREY600}>{currentTime.format('YYYY.MM.DD. hh:mm')}</Regular14>
              <Spacer width={10} />
              <Regular16 color={BLACK}>{item.trashCategoryName}</Regular16>
            </View>
          </HistoryItem>
        </>
      );
    },
    [md],
  );

  if (isLoading) return <ActivityIndicator />;

  return (
    <Container selected={selected}>
      <FlatList
        data={data?.pages.flatMap(value => value.trashLogResponseList)}
        renderItem={({ item, index }) => renderThrowHistory(item, index)}
        onEndReachedThreshold={0.8}
        onEndReached={() => hasNextPage && fetchNextPage()}
      />
    </Container>
  );
};

export default ThrowHistory;
