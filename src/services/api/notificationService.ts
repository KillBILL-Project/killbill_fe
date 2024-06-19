import api from '@services/utils/api';

export interface NotificationByDateType {
  date: string;
  notificationResponses: NotificationType[];
}
export interface NotificationType {
  createdAt: string;
  deepLink: string;
  message: string;
  notificationId: string;
  title: string;
  isEqualDate?: boolean;
}

export interface NotificationResponseType {
  hasNext: boolean;
  notificationByDates: NotificationByDateType[];
}

export const getNotificationList = async (
  page = 0,
): Promise<NotificationResponseType & { nextPage: number }> => {
  const { data } = await api.get(`/notification?size=15&page=${page}`);
  return { ...data.data, nextPage: page + 1 };
};
