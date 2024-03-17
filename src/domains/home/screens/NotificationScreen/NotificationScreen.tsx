import React from 'react';
import { FlatList } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import { includes } from 'lodash';
import Screen from '../../../../components/Screen/Screen';
import { Container } from './NotificationScreen.style';
import { GREY300 } from '../../../../constants/colors';
import {
  getNotificationList,
  NotificationType,
} from '../../../../services/api/notificationService';
import NotificationDate from './components/DailyNotification';

const NotificationScreen = () => {
  const { data } = useInfiniteQuery({
    queryKey: ['notification'],
    queryFn: async ({ pageParam }) => {
      const response = await getNotificationList({ page: pageParam });
      const notificationResponse = response.data.data;
      const notificationList = notificationResponse.notificationResponses;

      const sortedDate: string[] = [];
      const notificationByDate: { [key: string]: NotificationType[] } = {};

      notificationList.forEach(item => {
        const date = moment(item.createdAt).format('YYYYMMDD');

        if (includes(sortedDate, date)) {
          notificationByDate[date].push({ ...item });
        } else {
          sortedDate.push(date);
          notificationByDate[date] = [{ ...item }];
        }
      });

      const sortedNotificationList = sortedDate.map(item => ({
        date: item,
        notificationList: notificationByDate[item],
      }));

      return {
        hasNext: notificationResponse.hasNext,
        sortedNotificationList,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length : undefined),
  });

  return (
    <Screen title="알림" backgroundColor={GREY300}>
      <Container>
        <FlatList
          keyExtractor={item => item.date}
          data={data?.pages.flatMap(item => item.sortedNotificationList)}
          renderItem={({ item }) => <NotificationDate {...item} />}
        />
      </Container>
    </Screen>
  );
};

export default NotificationScreen;
