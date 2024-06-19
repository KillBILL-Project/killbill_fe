import React, { useState } from 'react';
import moment from 'moment/moment';
import { FlatList, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BLACK, GREY600 } from '@constants/colors';
import { Regular14, Regular16 } from '@components/Typography';
import { getTrashLog, TrashLogResponseListType } from '@services/api/trashService';
import { isIOS, scale } from '@utils/platform';
import { convertTimeFullDate } from '@utils/common';
import DateLabel from '@components/DateLabel';
import HistoryItem from '@components/HistoryItem';
import Picker from '@components/Picker';
import Separator from '@components/Separator';
import Spacer from '@components/Spacer';
import Spinner from '@components/Spinner';
import NoTrash from '@components/NoTrash';
import { Container } from './styles';

interface ThrowHistoryProps {
  selected: boolean;
}

const ThrowHistory = ({ selected }: ThrowHistoryProps) => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('-1');
  const [yearForIos, setYearForIos] = useState(selectedYear);
  const [monthForIos, setMonthForIos] = useState(selectedMonth);

  const onChangeYear = (value: string) => setSelectedYear(value);
  const onCloseYear = () => setYearForIos(selectedYear);
  const onChangeMonth = (value: string) => setSelectedMonth(value);
  const onCloseMonth = () => setMonthForIos(selectedMonth);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['throw', isIOS ? yearForIos : selectedYear, isIOS ? monthForIos : selectedMonth],
    queryFn: async ({ pageParam }): Promise<TrashLogResponseListType> => {
      const month = isIOS ? monthForIos : selectedMonth;
      const year = isIOS ? yearForIos : selectedYear;
      const date = month === '-1' ? year : `${year}-${month}`;

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
        contentContainerStyle={{ flexGrow: 1, padding: scale(24) }}
        ListHeaderComponent={
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(16) }}>
            <Picker
              type="YEAR"
              color={BLACK}
              selectedValue={selectedYear}
              onValueChange={onChangeYear}
              onClose={onCloseYear}
            />
            <Picker
              type="MONTH"
              color={BLACK}
              selectedValue={selectedMonth}
              onValueChange={onChangeMonth}
              onClose={onCloseMonth}
            />
          </View>
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={isLoading ? <Spinner /> : <NoTrash />}
      />
    </Container>
  );
};

export default ThrowHistory;
