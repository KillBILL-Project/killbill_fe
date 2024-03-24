import { useMutation } from '@tanstack/react-query';
import { requestEmptyTrash } from '../../../services/api/trashService';

const useEmptyTrashMutation = () => {
  return useMutation({
    mutationFn: requestEmptyTrash,
    mutationKey: ['empty-thrash'],
  });
};

export default useEmptyTrashMutation;
