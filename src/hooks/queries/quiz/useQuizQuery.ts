import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '@services/api/quizService';
import { GetQuizParams } from '@constants/quiz';

const useQuizQuery = ({ quizId, enabled }: GetQuizParams) => {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: async () => getQuiz({ quizId }),
    enabled,
  });
};

export default useQuizQuery;
