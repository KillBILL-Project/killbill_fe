import { WwoossResponse } from '@type/common';
import { objectToQueryParam } from '@utils/common';
import api from '@services/utils/api';
import { TrashCategoryKrType } from '@type/trash';
import { isEmpty } from 'lodash';

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
  isDateChanged?: boolean;
}

export interface TrashCanHistoryResponseListType {
  hasNext: boolean;
  trashCanHistoryResponseList: TrashCanHistoryType[];
}

export interface TrashLogType {
  trashLogId: number;
  trashCategoryName: TrashCategoryKrType;
  size: number;
  trashImagePath: string;
  createdAt: string;
  isDateChanged?: boolean;
}

export interface TrashLogResponseListType {
  hasNext: boolean;
  totalCount: number;
  trashLogResponseList: TrashLogType[];
}

export interface ITrashCanLocation {
  trashCanId: number;
  lng: number;
  lat: number;
  address: string;
  placeName: string;
  trashType: string[];
  trashImages: string[];
}

export interface ITrashLogList {
  hasNext: boolean;
  totalCount: number;
  trashLogResponseList: ITrashLog[];
}

export interface ITrashLog {
  trashLogId: number;

  trashCategoryName: string;

  size: string;

  trashImagePath: string;

  createdAt: string;
}

export interface CarbonSavingType {
  carbonSaving: number;
  trashCategoryName: TrashCategoryKrType;
}

export interface RefundType {
  refund: number;
  trashCategoryName: TrashCategoryKrType;
}

export interface TrashChartItemType extends CarbonSavingType {
  color: string;
}

export interface TrashCanContentsType {
  carbonSavingByTrashCategoryList: CarbonSavingType[];
  refundByTrashCategoryList: RefundType[];
  totalCarbonSaving: number;
  totalRefund: number;
  trashCanHistoryId: number;
}

export const getTrashCanHistory = async (
  params: GetTrashCanHistoryParams,
): Promise<TrashCanHistoryResponseListType> => {
  const queryParam = objectToQueryParam(params);
  const response = await api.get(`/trash-can-histories?${queryParam}`);
  return response.data.data;
};

export const getTrashLog = async (params: GetTrashLogParams): Promise<TrashLogResponseListType> => {
  const queryParam = objectToQueryParam(params);
  const response = await api.get(`/trash-log?${queryParam}`);
  return response.data.data;
};

export const requestThrowTrash = async (trashInfoId: number) => {
  const data = await api.post('/trash-can-contents', { trashInfoId });
  return data;
};

export const requestEmptyTrash = async (): Promise<WwoossResponse<TrashCanContentsType>> => {
  const { data } = await api.delete('/trash-can-contents');
  return data;
};

export const requestTrashCanContentsCount = async (): Promise<number> => {
  const { data } = await api.get('/trash-can-contents/total-count');
  return data.data;
};

export const requestTrashCanLocation = async (
  lat: number,
  lng: number,
  distance: number,
  trashType: string[],
): Promise<ITrashCanLocation[]> => {
  let url = `trash-can?lat=${+lat}&lng=${+lng}&distance=${distance}`;
  if (!isEmpty(trashType)) {
    url += `&trashType=${trashType.toString()}`;
  }
  const { data } = await api.get(url);
  return data.data;
};

export const requestTrashLog = async (
  size: number,
  page = 0,
): Promise<ITrashLogList & { nextPage: number }> => {
  const { data } = await api.get(`trash-log?size=${size}&page=${page}`);
  return { ...data.data, nextPage: page + 1 };
};
