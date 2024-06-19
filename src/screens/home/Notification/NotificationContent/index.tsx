import React from 'react';
import { BLACK, GREY600 } from '@constants/colors';
import { Regular14, Regular16 } from '@components/Typography';
import Spacer from '@components/Spacer';
import { Container } from './styles';

interface NotificationDateProps {
  title: string;
  message: string;
}

const NotificationContent = ({ title, message }: NotificationDateProps) => {
  return (
    <Container>
      <Regular14 color={GREY600}>{title}</Regular14>
      <Spacer height={4} />
      <Regular16 color={BLACK}>{message}</Regular16>
    </Container>
  );
};

export default NotificationContent;
