import { useInfiniteQuery } from '@tanstack/react-query';
import { getComplimentCard } from '../../../services/api/complimentService';
import { CardCategory } from '../../../domains/home/screens/PraiseCardScreen/PraiseCardScreen';

const usePraiseQuery = (cardCategory: CardCategory) => {
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

export default usePraiseQuery;
