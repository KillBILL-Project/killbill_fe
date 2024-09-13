import styled from 'styled-components/native';
import { BLACK, GREY500, WHITE } from '@constants/colors';
import { px, ratioPx } from '@utils/platform';

export const Container = styled.TouchableOpacity`
  padding: ${ratioPx(16)};
  background-color: ${WHITE};
  border-radius: ${px(15)};
  margin: ${ratioPx(4)} ${ratioPx(4)} ${ratioPx(12)};
`;

export const TimeRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: ${ratioPx(8)};
`;

export const TimeText = styled.Text`
  font-size: ${ratioPx(34)};
  line-height: ${ratioPx(46)};
  font-weight: 700;
  color: ${BLACK};
`;

export const MeridiemText = styled.Text`
  font-size: ${ratioPx(18)};
  line-height: ${ratioPx(38)};
  font-weight: 400;
  color: ${BLACK};
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${ratioPx(21)};
`;

export const SettingRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(6)};
`;

export const SeeMoreButton = styled.TouchableOpacity``;

export const SeeMoreButtonImage = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;

export const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DayContainer = styled.View`
  flex-direction: row;
`;

const Day = styled.View`
  width: ${ratioPx(26)};
  height: ${ratioPx(26)};
  border-radius: ${ratioPx(13)};
  justify-content: center;
  align-items: center;
  margin: ${ratioPx(3)};
`;

export const SingleDay = styled(Day)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? BLACK : WHITE)};
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? BLACK : GREY500)};
`;

export const SingleDayText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? WHITE : BLACK)};
  font-size: ${ratioPx(12)};
  font-weight: 400;
  line-height: ${ratioPx(18)};
`;

export const EachWeekText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  line-height: ${ratioPx(24)};
  color: ${BLACK};
`;

export const SelectButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SelectButtonText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 400;
  color: #333;
`;
