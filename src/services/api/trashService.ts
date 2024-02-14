import { AxiosResponse } from 'axios';
import { WwoossResponse } from '../../types/common';
import api from '../utils/api';

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
}

export interface TrashLogResponseListType {
  hasNext: boolean;
  totalCount: number;
  trashLogResponseList: TrashLogType[];
}

export const getTrashCanHistory = async (
  params: GetTrashCanHistoryParams,
): Promise<AxiosResponse<WwoossResponse<TrashCanHistoryResponseListType>>> => {
  const queryParams = new URLSearchParams();

  Object.keys(params).forEach(key => {
    const value = params[key as keyof GetTrashCanHistoryParams];
    queryParams.append(key, String(value));
  });

  return api.get(`/trash-can-histories?${queryParams.toString()}`);
};

export const getTrashLog = async (
  params: GetTrashLogParams,
): Promise<AxiosResponse<WwoossResponse<TrashLogResponseListType>>> => {
  const queryParams = new URLSearchParams();

  Object.keys(params).forEach(key => {
    const value = params[key as keyof GetTrashCanHistoryParams];
    queryParams.append(key, String(value));
  });

  return api.get(`/trash-log?${queryParams.toString()}`);
};
