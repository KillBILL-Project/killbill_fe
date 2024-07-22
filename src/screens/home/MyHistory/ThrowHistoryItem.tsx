import { TrashLogType } from '@services/api/trashService';
import React from 'react';
import moment from 'moment';
import DateLabel from '@components/DateLabel';
import Separator from '@components/Separator';
import HistoryItem from '@screens/home/MyHistory/HistoryItem';
import { getTrashCategoryImage } from '@utils/trash';
import { Regular14, Regular16 } from '@components/Typography';
import { BLACK, GREY600 } from '@constants/colors';
import { convertTimeFullDate } from '@utils/common';
import { Card, CardImage, HistoryItemContent } from '@screens/home/MyHistory/styles';

interface ThrowHistoryItemProps {
  item: TrashLogType;
}

const ThrowHistoryItem = ({ item }: ThrowHistoryItemProps) => {
  const date = moment(item.createdAt);

  return (
    <>
      {item.isDateChanged ? (
        <DateLabel month={date.format('M')} day={date.format('D')} />
      ) : (
        <Separator horizontal length="100%" margin={0} />
      )}
      <HistoryItem
        cardComponent={
          <Card>
            <CardImage source={getTrashCategoryImage(item.trashCategoryName)} />
          </Card>
        }
      >
        <HistoryItemContent>
          <Regular14 color={GREY600}>{convertTimeFullDate(item.createdAt)}</Regular14>
          <Regular16 color={BLACK}>{item.trashCategoryName}</Regular16>
        </HistoryItemContent>
      </HistoryItem>
    </>
  );
};

export default ThrowHistoryItem;
