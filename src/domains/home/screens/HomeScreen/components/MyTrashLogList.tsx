import React, { useCallback } from 'react';
import Item from './Item';
import { useTrashLogQuery } from '../../../../../hooks/queries/trash/useTrashLogQuery';
import { FlatList, ListRenderItem } from 'react-native';
import { ITrashLog } from '../../../../../services/api/trashService';
import MyTrashLogHeader from '../../TrashLocationScreen/components/MyTrashLogHeader';
import NoData from '../../../../../components/common/NoData';

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
