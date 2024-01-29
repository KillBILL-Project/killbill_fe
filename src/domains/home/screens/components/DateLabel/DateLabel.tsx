import React from 'react';
import { Container, Title } from './DateLabel.style';
import { Bold16 } from '../../../../../components/Typography';
import { BLACK } from '../../../../../constants/colors';

// 일단 연월, 월일 형태에 맞춰서 타입 생성, 추후 필요에 따라 변경 가능
type DateLabelProps =
  | { year: number; month: number; day?: never }
  | { year?: never; month: number; day: number };

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
