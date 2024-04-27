import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestEmptyTrash } from '../../../services/api/trashService';

const useEmptyTrashMutation = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: requestEmptyTrash,
    mutationKey: ['empty-thrash'],
    onSuccess: () => {
      query.resetQueries({ queryKey: ['useTrashCanContentsCount'] });
    },
  });
};

export default useEmptyTrashMutation;
