import { TrashCanHistoryType } from '@services/api/trashService';
import React from 'react';
import moment from 'moment';
import DateLabel from '@components/DateLabel';
import Separator from '@components/Separator';
import HistoryItem from '@screens/home/MyHistory/HistoryItem';
import { Regular14, Regular16 } from '@components/Typography';
import { BLACK, GREY600 } from '@constants/colors';
import {
  BottomText,
  HistoryItemContent,
  HistoryItemTextRow,
  TopText,
} from '@screens/home/MyHistory/styles';

interface EmptyHistoryItemProps {
  item: TrashCanHistoryType;
}

export const EmptyHistoryItem = ({ item }: EmptyHistoryItemProps) => {
  const date = moment(item.createdAt);

  return (
    <>
      {item.isDateChanged ? (
        <DateLabel year={date.format('YYYY')} month={date.format('M')} />
      ) : (
        <Separator horizontal length="100%" margin={0} />
      )}
      <HistoryItem
        cardComponent={
          <>
            <TopText>{date.format('D')}</TopText>
            <BottomText>{date.format('ddd')}</BottomText>
          </>
        }
      >
        <HistoryItemContent>
          <HistoryItemTextRow>
            <Regular14 color={GREY600}>탄소 절감량</Regular14>
            <Regular16 color={BLACK}>{`${item.carbonSaving.toFixed(4)}gCO2`}</Regular16>
          </HistoryItemTextRow>
          <HistoryItemTextRow>
            <Regular14 color={GREY600}>예상 환급금</Regular14>
            <Regular16 color={BLACK}>{`${item.refund.toLocaleString()}원`}</Regular16>
          </HistoryItemTextRow>
        </HistoryItemContent>
      </HistoryItem>
    </>
  );
};
