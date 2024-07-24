import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';
import { BLACK } from '@constants/colors';

export const Container = styled.View<{ selected: boolean }>`
  flex: 1;
  display: ${({ selected }) => (selected ? 'block' : 'none')};
`;

export const HistoryItemContent = styled.View`
  gap: ${ratioPx(4)};
`;

/* EmptyHistory */

export const HistoryItemTextRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(7)};
`;

export const TopText = styled.Text`
  color: ${BLACK};
  font-size: ${ratioPx(20)};
  font-weight: 500;
  line-height: ${ratioPx(30)};
`;

export const BottomText = styled.Text`
  color: ${BLACK};
  font-size: ${ratioPx(12)};
  font-weight: 500;
  line-height: ${ratioPx(18)};
`;

/* ThrowHistory */

export const Card = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
