import api from '@services/utils/api';
import { RecordActiveLogParams, UserActiveLogType } from '@constants/log';

export const recordActiveLog = async (
  params: RecordActiveLogParams,
): Promise<UserActiveLogType> => {
  const response = await api.post('/user-active-log', params);
  return response.data.data;
};

export const validateActiveLog = async (userActiveLogId: number): Promise<UserActiveLogType> => {
  const response = await api.patch(`/user-active-log/${userActiveLogId}/verified`);
  return response.data.data;
};

export const getUserActiveLog = async (): Promise<number> => {
  const response = await api.get(`/user-active-log`);
  return response.data.data;
};

export const getVerifiedUserActiveLog = async (): Promise<number> => {
  const response = await api.get(`/user-active-log/verified`);
  return response.data.data;
};

export const getTotalRefund = async (): Promise<number> => {
  const response = await api.get(`/trash-can-histories/total-refund`);
  return response.data.data;
};
