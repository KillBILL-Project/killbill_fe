import React from 'react';
import { Regular14, Regular16 } from '../../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../../constants/colors';
import Spacer from '../../../../../../components/Spacer';
import { Container } from './DailyNotification.style';

interface NotificationDateProps {
  title: string;
  message: string;
}

const DailyNotification = ({ title, message }: NotificationDateProps) => {
  return (
    <Container>
      <Regular14 color={GREY600}>{title}</Regular14>
      <Spacer height={4} />
      <Regular16 color={BLACK}>{message}</Regular16>
    </Container>
  );
};

export default DailyNotification;
