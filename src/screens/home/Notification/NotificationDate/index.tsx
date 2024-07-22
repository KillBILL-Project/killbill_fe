import React from 'react';
import moment from 'moment';
import { getDayOfWeek } from '@utils/common';
import { NotificationByDateType } from '@services/api/notificationService';
import NotificationContent from '@screens/home/Notification/NotificationContent';
import { Container, Content, ContentContainer, Date, DateContainer, Day } from './styles';

const NotificationDate = ({ notificationData }: { notificationData: NotificationByDateType }) => {
  const { date, notificationResponses } = notificationData;
  return (
    <Container>
      <DateContainer>
        <Date>{moment(date).format('DD')}</Date>
        <Day>{getDayOfWeek(moment(date).day())}</Day>
      </DateContainer>
      <ContentContainer>
        {notificationResponses.map(item => {
          return (
            <Content key={String(item.notificationId)}>
              <NotificationContent title={item.title} message={item.message} />
            </Content>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default NotificationDate;
