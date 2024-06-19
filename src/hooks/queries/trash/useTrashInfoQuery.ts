import { useQuery } from '@tanstack/react-query';
import { TrashCategoryEn } from '@utils/trash';
import { WwoossResponse } from '@type/common';
import api from '@services/utils/api';

export interface TrashInfoType {
  refund: number;
  size: 'BIG' | 'MEDIUM' | 'SMALL';
  trashCategoryName: TrashCategoryEn;
  trashImagePath: string;
  trashInfoId: number;
}

export const getTrashInfo = async (): Promise<TrashInfoType[]> => {
  const { data } = await api.get<WwoossResponse<TrashInfoType[]>>('trash-info');
  return data.data;
};

export const useTrashInfoQuery = () => {
  return useQuery({
    queryKey: ['trashInfo'],
    queryFn: getTrashInfo,
  });
};
