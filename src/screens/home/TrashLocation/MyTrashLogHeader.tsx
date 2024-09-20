import React from 'react';
import {
  Title,
  TrashCount,
  TrashHistoryHeader,
  TrashHistoryHeaderText,
} from '@screens/home/Home/styles';

interface MyTrashLogHeaderProps {
  totalCount?: number;
}

const MyTrashLogHeader = ({ totalCount }: MyTrashLogHeaderProps) => {
  return (
    <TrashHistoryHeader>
      <Title>
        <TrashHistoryHeaderText>나의 쓰레기 내역</TrashHistoryHeaderText>
      </Title>
      <TrashCount>
        <TrashHistoryHeaderText>{totalCount ?? 0}개</TrashHistoryHeaderText>
      </TrashCount>
    </TrashHistoryHeader>
  );
};

export default MyTrashLogHeader;
