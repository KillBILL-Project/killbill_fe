import { useQuery } from '@tanstack/react-query';
import api from '../../../services/utils/api';

export const useTrashCanLocationQuery = ({ lat, lng, distance }: any) => {
  return useQuery({
    queryKey: ['trash-can-location'],
    queryFn: () => api.get(`trash-can?lat=${+lat}&lng=${+lng}&distance=${distance}`),
    enabled: false,
    retry: 0,
  });
};
