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

export const TimeTest = styled.Text`
  font-size: 34px;
  font-weight: 700;
  color: ${BLACK};
`;

export const TopSection = styled.View`
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

export const AlarmToggleSwitch = styled.View``;

export const SeeMoreButton = styled.TouchableOpacity``;

export const SeeMoreButtonImage = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;

export const CycleContainer = styled.View`
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

export const SelectedDay = styled(Day)`
  background-color: ${BLACK};
`;

export const NonSelectedDay = styled(Day)`
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY500};
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
