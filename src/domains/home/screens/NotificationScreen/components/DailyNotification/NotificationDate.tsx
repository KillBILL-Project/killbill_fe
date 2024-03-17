import React from 'react';
import moment from 'moment';
import { NotificationType } from '../../../../../../services/api/notificationService';
import DailyNotification from '../NotificationContent';
import {
  Container,
  Content,
  ContentContainer,
  Date,
  DateContainer,
  Day,
} from './NotificationDate.style';
import { getDayOfWeek } from '../../../../../../utils/common';

interface NotificationContentProps {
  date: string;
  notificationList: NotificationType[];
}

const NotificationDate = ({ date, notificationList }: NotificationContentProps) => {
  return (
    <Container>
      <DateContainer>
        <Date>{moment(date).format('DD')}</Date>
        <Day>{getDayOfWeek(moment(date).day())}</Day>
      </DateContainer>
      <ContentContainer>
        {notificationList.map(item => (
          <Content key={String(item.notificationId)}>
            <DailyNotification title={item.title} message={item.message} />
          </Content>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default NotificationDate;
