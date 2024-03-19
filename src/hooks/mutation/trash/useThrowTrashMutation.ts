import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestThrowTrash } from '../../../services/api/trashService';

const useThrowTrashMutation = () => {
  const queryClient = useQueryClient();

  const { isError, isIdle, mutate } = useMutation({
    mutationFn: requestThrowTrash,
    mutationKey: ['throw-thrash'],
    onError: (error: Error) => {
      console.log('errrorerrrorerrror', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trashLog'] });
    },
  });
  return { mutate, isError, isIdle };
};

export default useThrowTrashMutation;
