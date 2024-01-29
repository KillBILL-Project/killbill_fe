import React from 'react';
import { FlatList } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import { Con, Container, Container2, Container3, DayIndicator } from './NotificationScreen.style';
import { Bold18, Medium14, Regular12, Regular14 } from '../../../../components/Typography';
import { BLACK, GREY300, GREY600 } from '../../../../constants/colors';
import Spacer from '../../../../components/Spacer/Spacer';
import { getDayOfWeek } from '../../../../utils/common';

interface NotificationsType {
  title: string;
  text: string[];
}

interface NotificationType {
  day: Date;
  notifications: NotificationsType[];
}

const notificationList: NotificationType[] = [
  {
    day: new Date(2024, 1, 15),
    notifications: [
      {
        title: '쓰레기 배출',
        text: ['지구를 생각하는 시간이에요.', '현재까지 배출한 쓰레기를 입력해주세요.'],
      },
    ],
  },
  {
    day: new Date(2024, 1, 14),
    notifications: [
      {
        title: '쓰레기 배출',
        text: ['지구를 생각하는 시간이에요.', '현재까지 배출한 쓰레기를 입력해주세요.'],
      },
      {
        title: '레포트 도착',
        text: ['이번주 레포트를 확인해보세요.'],
      },
    ],
  },
  {
    day: new Date(2024, 1, 13),
    notifications: [
      {
        title: '쓰레기 배출',
        text: ['지구를 생각하는 시간이에요.', '현재까지 배출한 쓰레기를 입력해주세요.'],
      },
    ],
  },
];

const SingleNotification = ({ title, text }: NotificationsType) => {
  return (
    <Container3>
      <Regular12 color={GREY600}>{title}</Regular12>
      <Spacer height={4} />
      {text.map((item, index) => (
        <Regular14 key={`a${index.toString()}`} color={BLACK}>
          {item}
        </Regular14>
      ))}
    </Container3>
  );
};

const DailyNotification = ({ day, notifications }: NotificationType) => {
  return (
    <Container2>
      <DayIndicator>
        <Bold18 color={BLACK}>{day.getDate()}</Bold18>
        <Medium14 color={BLACK}>{getDayOfWeek(day)}</Medium14>
      </DayIndicator>
      <Con>
        {notifications.map((item, index) => {
          return index === 0 ? (
            <SingleNotification {...item} />
          ) : (
            <>
              <Spacer height={20} />
              <SingleNotification {...item} />
            </>
          );
        })}
      </Con>
    </Container2>
  );
};

const NotificationScreen = () => {
  return (
    <Screen title="알림" backgroundColor={GREY300}>
      <Container>
        <FlatList
          data={notificationList}
          renderItem={({ item }) => <DailyNotification {...item} />}
        />
      </Container>
    </Screen>
  );
};

export default NotificationScreen;
