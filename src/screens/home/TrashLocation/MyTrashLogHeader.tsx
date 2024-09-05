import React from 'react';
import {
  Title,
  TrashCount,
  TrashHistoryHeader,
  TrashHistoryHeaderText,
} from '@screens/home/Home/styles';

const MyTrashLogHeader = ({ totalCount }: { totalCount: number }) => {
  return (
    <TrashHistoryHeader>
      <Title>
        <TrashHistoryHeaderText>나의 쓰레기 내역</TrashHistoryHeaderText>
      </Title>
      <TrashCount>
        <TrashHistoryHeaderText>{totalCount}개</TrashHistoryHeaderText>
      </TrashCount>
    </TrashHistoryHeader>
  );
};

export default MyTrashLogHeader;
