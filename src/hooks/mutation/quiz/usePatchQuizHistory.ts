import { useMutation } from '@tanstack/react-query';
import { patchQuizHistoryToIssuedStatus } from '@services/api/quizService';

const usePatchQuizHistory = () => {
  return useMutation({
    mutationKey: ['patch-quiz-history'],
    mutationFn: (quizHistoryId: number) => patchQuizHistoryToIssuedStatus(quizHistoryId),
  });
};

export default usePatchQuizHistory;
