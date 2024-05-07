import { useInfiniteQuery } from '@tanstack/react-query';
import { CardCategory, getComplimentCard } from '../../../services/api/complimentService';

const useComplimentQuery = (cardCategory: CardCategory) => {
  return useInfiniteQuery({
    queryKey: ['compliment-card', cardCategory],
    queryFn: ({ pageParam }) => getComplimentCard(cardCategory, pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      const { hasNext } = lastPage;
      const { nextPage } = lastPage;
      return hasNext ? nextPage : null;
    },
  });
};

export default useComplimentQuery;
