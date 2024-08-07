import React from 'react';
import { ScrollView } from 'react-native';
import { GREY300 } from '@constants/colors';
import { useNotificationListQuery } from '@hooks/queries/notification/useNotificationListQuery';
import Screen from '@components/Screen';
import { Container } from './styles';
import NotificationDate from './NotificationDate';

let removeIndex = -1;

const NotificationScreen = () => {
  const { data, hasNextPage, fetchNextPage } = useNotificationListQuery();

  const notificationList = data?.pages.flatMap(item => item.notificationByDates);

  return (
    <Screen title="알림" backgroundColor={GREY300}>
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onTouchEnd={() => {
            if (hasNextPage) fetchNextPage();
          }}
        >
          {notificationList?.map((notificationData, index) => {
            const { notificationResponses, date } = notificationData;
            if (
              index + 1 !== notificationList?.length &&
              notificationList[index + 1].date === date
            ) {
              removeIndex = index + 1;
              notificationResponses.push(...notificationList[index + 1].notificationResponses);
            }

            if (removeIndex === index) {
              return <React.Fragment key={`no-value-${index}`} />;
            }
            return <NotificationDate notificationData={notificationData} key={`${date}`} />;
          })}
        </ScrollView>
      </Container>
    </Screen>
  );
};

export default NotificationScreen;
