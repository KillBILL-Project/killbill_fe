import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useTrashLogQuery } from '@hooks/queries/trash/useTrashLogQuery';
import { ITrashLog } from '@services/api/trashService';
import MyTrashLogHeader from '@screens/home/TrashLocation/MyTrashLogHeader';
import NoData from '@components/common/NoData';
import Item from './Item';

const MyTrashLogList = () => {
  const { data, hasNextPage, fetchNextPage } = useTrashLogQuery();

  const keyExtractor = useCallback(({ trashLogId }: { trashLogId: number }) => `${trashLogId}`, []);
  const renderItem: ListRenderItem<ITrashLog> = useCallback(({ item }) => {
    return <Item data={item} />;
  }, []);

  return (
    <>
      <MyTrashLogHeader totalCount={data?.pages[0].totalCount ?? 0} />
      <FlatList
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data?.pages.flatMap(log => log.trashLogResponseList)}
        onEndReached={() => hasNextPage && fetchNextPage()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoData />}
      />
    </>
  );
};

export default MyTrashLogList;
