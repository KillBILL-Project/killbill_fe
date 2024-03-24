import { ApiResponse } from '../../types/common';
import api from '../utils/api';
import { objectToQueryParam } from '../../utils/common';

interface GetTrashCanHistoryParams {
  date?: string;
  page: number;
  size?: number;
}

interface GetTrashLogParams {
  date?: string;
  page: number;
  size?: number;
}

export interface TrashCanHistoryType {
  trashCanHistoryId: number;
  createdAt: string;
  carbonSaving: number;
  refund: number;
  isEqualDate?: boolean;
}

export interface TrashCanHistoryResponseListType {
  hasNext: boolean;
  trashCanHistoryResponseList: TrashCanHistoryType[];
}

export interface TrashLogType {
  trashLogId: number;
  trashCategoryName: string;
  size: number;
  trashImagePath: string;
  createdAt: string;
  isEqualDate?: boolean;
}

export interface TrashLogResponseListType {
  hasNext: boolean;
  totalCount: number;
  trashLogResponseList: TrashLogType[];
}

export const getTrashCanHistory = async (
  params: GetTrashCanHistoryParams,
): ApiResponse<TrashCanHistoryResponseListType> => {
  const queryParam = objectToQueryParam(params);
  return api.get(`/trash-can-histories?${queryParam}`);
};

export const getTrashLog = async (
  params: GetTrashLogParams,
): ApiResponse<TrashLogResponseListType> => {
  const queryParam = objectToQueryParam(params);

  return api.get(`/trash-log?${queryParam}`);
};

export const requestThrowTrash = async (trashInfoId: number) => {
  const data = await api.post('/trash-can-contents', { trashInfoId });
  return data;
};

export const requestEmptyTrash = async () => {
  const data = await api.delete('/trash-can-contents');
  return data;
};

export const requestTrashCanContentsCount = async (): Promise<number> => {
  const { data } = await api.get('/trash-can-contents/total-count');
  return data.data;
};
