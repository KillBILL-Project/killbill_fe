import { useInfiniteQuery } from '@tanstack/react-query';
import { requestTrashLog } from '@services/api/trashService';

export const useTrashLogQuery = () => {
  return useInfiniteQuery({
    queryKey: ['trash-log-list'],
    queryFn: ({ pageParam }) => requestTrashLog(15, pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      const { hasNext } = lastPage;
      const { nextPage } = lastPage;

      return hasNext ? nextPage : null;
    },
  });
};
