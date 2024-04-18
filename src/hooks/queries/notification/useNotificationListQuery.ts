import { useInfiniteQuery } from '@tanstack/react-query';
import { getNotificationList } from '../../../services/api/notificationService';

export const useNotificationListQuery = () => {
  return useInfiniteQuery({
    queryKey: ['useNotificationListQuery'],
    queryFn: ({ pageParam }) => getNotificationList(pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      const { hasNext } = lastPage;
      const { nextPage } = lastPage;
      return hasNext ? nextPage : null;
    },
  });
};
