import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestThrowTrash } from '@services/api/trashService';

const useThrowTrashMutation = () => {
  const queryClient = useQueryClient();

  const { isError, isIdle, mutate } = useMutation({
    mutationFn: requestThrowTrash,
    mutationKey: ['throw-thrash'],
    onError: (error: Error) => {},
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['useTrashCanContentsCount'] });
      queryClient.refetchQueries({ queryKey: ['trash-log-list'] });
    },
  });
  return { mutate, isError, isIdle };
};

export default useThrowTrashMutation;
