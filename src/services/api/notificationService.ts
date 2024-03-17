import api from '../utils/api';
import { ApiResponse } from '../../types/common';
import { objectToQueryParam } from '../../utils/common';

export interface NotificationType {
  createdAt: string;
  deepLink: string;
  message: string;
  notificationId: string;
  title: string;
  isEqualDate?: boolean;
}

export interface GetNotificationListParams {
  page?: number;
  size?: number;
  direction?: 'DESC' | 'ASC';
}

export interface NotificationResponseType {
  hasNext: boolean;
  notificationResponses: NotificationType[];
}

export const getNotificationList = async (
  params: GetNotificationListParams,
): ApiResponse<NotificationResponseType> => {
  const defaultParams: GetNotificationListParams = { direction: 'DESC' };

  const queryParam = objectToQueryParam<GetNotificationListParams>({ ...defaultParams, ...params });
  return api.get(`/notification?${queryParam}`);
};
