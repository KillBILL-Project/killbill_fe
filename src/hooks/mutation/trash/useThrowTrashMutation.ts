import { useMutation } from '@tanstack/react-query';
import { requestThrowTrash } from '../../../services/api/trashService';

const useThrowTrashMutation = () => {
  const { isError, isIdle, mutate } = useMutation({
    mutationFn: requestThrowTrash,
    mutationKey: ['throw-thrash'],
    onError: (error: Error) => {
      console.log('errrorerrrorerrror', error);
    },
    onSuccess: data => {
      console.log('datadatadatadata', data);
    },
  });
  return { mutate, isError, isIdle };
};

export default useThrowTrashMutation;
