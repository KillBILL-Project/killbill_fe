import { useMutation, useQueryClient } from '@tanstack/react-query';
import { validateActiveLog } from '@services/api/logService';

const useValidateActiveLogMutation = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (userActiveLogId: number) => validateActiveLog(userActiveLogId),
    mutationKey: ['validate-active-log'],
    onSuccess: () => {
      query.refetchQueries({ queryKey: ['wwooss-token', 'QUIZ'] });
    },
  });
};

export default useValidateActiveLogMutation;
