import { useQuery } from '@tanstack/react-query';
import api from '../../../services/utils/api';

export const useTrashLogQuery = () => {
  return useQuery({ queryKey: ['trashLog'], queryFn: () => api.get(`trash-log?size=1000`) });
};
