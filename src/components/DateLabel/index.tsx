import React from 'react';
import { BLACK } from '@constants/colors';
import { Bold16 } from '@components/Typography';
import { Container, Title } from './styles';

// 일단 연월, 월일 형태에 맞춰서 타입 생성, 추후 필요에 따라 변경 가능
type DateLabelProps =
  | { year: number | string; month: number | string; day?: never }
  | { year?: never; month: number | string; day: number | string };

const DateLabel = ({ year, month, day }: DateLabelProps) => {
  const y = year ? `${year}년 ` : '';
  const m = month ? `${month}월 ` : '';
  const d = day ? `${day}일` : '';
  return (
    <Container>
      <Title>
        <Bold16 color={BLACK}>{y + m + d}</Bold16>
      </Title>
    </Container>
  );
};

export default DateLabel;
