import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { ITrashLog, ITrashLogList } from '@services/api/trashService';
import NoData from '@components/common/NoData';
import { MyTrashLogContainer } from '@screens/home/Home/styles';
import { FetchNextPageOptions, InfiniteData } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import Item from './Item';

interface MyTrashLogListProps {
  trashLogList: InfiniteData<ITrashLogList & { nextPage: number }> | undefined;
  hasNextPage: boolean;
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<unknown>;
}

const MyTrashLogList = ({ trashLogList, hasNextPage, fetchNextPage }: MyTrashLogListProps) => {
  const keyExtractor = useCallback(({ trashLogId }: { trashLogId: number }) => `${trashLogId}`, []);
  const renderItem: ListRenderItem<ITrashLog> = useCallback(({ item }) => {
    return <Item data={item} />;
  }, []);

  // TODO: 예외 처리
  return (
    <MyTrashLogContainer>
      {trashLogList && !isEmpty(trashLogList.pages) ? (
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={trashLogList.pages.flatMap(log => log.trashLogResponseList)}
          onEndReached={() => hasNextPage && fetchNextPage()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoData />}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      ) : null}
    </MyTrashLogContainer>
  );
};

export default MyTrashLogList;
