import { useQuery } from '@tanstack/react-query';
import { GetWwoossTokenParams } from '@constants/quiz';
import { getWwoossToken } from '@services/api/quizService';

const useWwoossTokenQuery = ({ issueType }: GetWwoossTokenParams) => {
  return useQuery({
    queryKey: ['wwooss-token', issueType],
    queryFn: async () => getWwoossToken({ issueType }),
  });
};

export default useWwoossTokenQuery;
