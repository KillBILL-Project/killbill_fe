import { useMutation, useQueryClient } from '@tanstack/react-query';
import { issueWwoossToken } from '@services/api/quizService';

const useIssueWwoossTokenMutation = (issueType: 'QUIZ') => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: () => issueWwoossToken({ issueType: 'QUIZ' }),
    mutationKey: ['issue-wwooss-token'],
    onSuccess: () => {
      query.refetchQueries({ queryKey: ['wwooss-token', issueType] });
    },
  });
};

export default useIssueWwoossTokenMutation;
