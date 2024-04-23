import { useQuery } from '@tanstack/react-query';
import api from '../../../services/utils/api';

export const useTrashCanLocationQuery = ({ lat, lng, distance, trashType }: any) => {
  return useQuery({
    queryKey: ['trash-can-location', lat, lng, distance, trashType],
    queryFn: () =>
      api.get(`trash-can?lat=${+lat}&lng=${+lng}&distance=${distance}&trashType=${trashType}`),
    enabled: false,
    retry: 0,
  });
};
