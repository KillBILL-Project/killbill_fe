import { useInfiniteQuery } from '@tanstack/react-query';
import { getQuizHistory } from '@services/api/quizService';

const useQuizHistoryQuery = () => {
  return useInfiniteQuery({
    queryKey: ['quiz-history'],
    queryFn: async ({ pageParam }) => {
      const { hasNext, quizHistoryInfoList } = await getQuizHistory({ page: pageParam });
      return { hasNext, quizHistoryInfoList };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });
};

export default useQuizHistoryQuery;
