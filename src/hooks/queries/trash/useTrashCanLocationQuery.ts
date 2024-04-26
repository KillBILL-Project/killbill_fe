import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { requestTrashCanLocation } from '../../../services/api/trashService';

export const useTrashCanLocationQuery = ({ lat, lng, distance, trashType }: any) => {
  return useQuery({
    queryKey: ['trash-can-location', lat, lng, distance, trashType],
    queryFn: () => requestTrashCanLocation(lat, lng, distance, trashType),
    enabled: false,
    retry: 0,
    placeholderData: keepPreviousData,
  });
};
