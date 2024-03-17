import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { FlatList, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import {
  getTrashCanHistory,
  TrashCanHistoryResponseListType,
} from '../../../../../../services/api/trashService';
import Separator from '../../../../../../components/Separator';
import DateLabel from '../../../components/DateLabel';
import HistoryItem from '../../../components/HistoryItem';
import { Regular14, Regular16 } from '../../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../../constants/colors';
import Spacer from '../../../../../../components/Spacer';
import { Container } from './EmptyHistory.style';
import { inProgressState } from '../../../../../../states';
import { isIOS, ratio } from '../../../../../../utils/platform';
import Picker from '../../../components/Picker';
import Spinner from '../../../../../../components/Spinner';

interface EmptyHistoryProps {
  selected: boolean;
}

const EmptyHistory = ({ selected }: EmptyHistoryProps) => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('-1');
  const [yearForIos, setYearForIos] = useState(selectedYear);
  const [monthForIos, setMonthForIos] = useState(selectedMonth);

  const onChangeYear = (value: string) => setSelectedYear(value);
  const onCloseYear = () => setYearForIos(selectedYear);
  const onChangeMonth = (value: string) => setSelectedMonth(value);
  const onCloseMonth = () => setMonthForIos(selectedMonth);

  const setInProgress = useSetRecoilState(inProgressState);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['empty', isIOS ? yearForIos : selectedYear, isIOS ? monthForIos : selectedMonth],
    queryFn: async ({ pageParam }): Promise<TrashCanHistoryResponseListType> => {
      const month = isIOS ? monthForIos : selectedMonth;
      const year = isIOS ? yearForIos : selectedYear;
      const date = month === '-1' ? year : `${year}-${month}`;

      const response = await getTrashCanHistory({ page: pageParam, date });
      const trashCanHistoryResponse = response.data.data;
      const { trashCanHistoryResponseList } = trashCanHistoryResponse;

      let currentDate = moment().format('YYYYMM');

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

  useEffect(() => setInProgress(isLoading), [setInProgress, isLoading]);

  return (
    <Container selected={selected}>
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
        contentContainerStyle={{ flexGrow: 1, padding: ratio * 24 }}
        ListHeaderComponent={
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: ratio * 16 }}>
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
        ListEmptyComponent={isLoading ? <Spinner /> : null}
      />
    </Container>
  );
};

export default EmptyHistory;
