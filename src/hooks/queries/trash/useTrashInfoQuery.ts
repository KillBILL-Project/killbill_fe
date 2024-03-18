import { useQuery } from '@tanstack/react-query';
import api from '../../../services/utils/api';

export const useTrashInfoQuery = () => {
  return useQuery({ queryKey: ['trashInfo'], queryFn: () => api.get('trash-info') });
};
