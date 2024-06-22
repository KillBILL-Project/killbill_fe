import { useQuery } from '@tanstack/react-query';
import { requestTrashCanContentsCount } from '@services/api/trashService';

const useTrashCanContentsCount = () => {
  return useQuery<number, Error>({
    queryKey: ['useTrashCanContentsCount'],
    queryFn: requestTrashCanContentsCount,
  });
};

export default useTrashCanContentsCount;
