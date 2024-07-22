import { useQuery } from '@tanstack/react-query';
import { WwoossResponse } from '@type/common';
import api from '@services/utils/api';
import { TrashCategoryEnType } from '@type/trash';

export interface TrashInfoType {
  refund: number;
  size: 'BIG' | 'MEDIUM' | 'SMALL';
  trashCategoryName: TrashCategoryEnType;
  trashImagePath: string;
  trashInfoId: number;
}

export const getTrashInfo = async (): Promise<TrashInfoType[]> => {
  const { data } = await api.get<WwoossResponse<TrashInfoType[]>>('trash-info');
  return data.data;
};

export const useTrashInfoQuery = () => {
  const { data: trashInfo } = useQuery({
    queryKey: ['trashInfo'],
    queryFn: getTrashInfo,
  });
  return { trashInfo };
};
