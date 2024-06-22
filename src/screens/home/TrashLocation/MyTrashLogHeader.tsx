import { Text } from 'react-native';
import React from 'react';
import { BLACK } from '@constants/colors';
import { H3 } from '@components/Typography';
import { Title, TrashCount, TrashHistoryHeader } from '@screens/home/Home/styles';

const MyTrashLogHeader = ({ totalCount }: { totalCount: number }) => {
  return (
    <TrashHistoryHeader>
      <Title>
        <H3 color={BLACK}>나의 쓰레기 내역</H3>
      </Title>
      <TrashCount>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{totalCount}개</Text>
      </TrashCount>
    </TrashHistoryHeader>
  );
};

export default MyTrashLogHeader;
