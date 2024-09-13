import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  flex: 1;
`;

export const TimePickerContainer = styled(LinearGradient)`
  width: 100%;
  height: ${ratioPx(236)};
`;

export const TimePicker = styled.View`
  position: absolute;
  flex-direction: row;
  bottom: 0;
  margin-bottom: ${ratioPx(32)};
  margin-left: ${ratioPx(56)};
  margin-right: ${ratioPx(51)};
`;

export const MeridiemScroll = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const TimeScroll = styled.View`
  flex-direction: row;
  gap: ${ratioPx(32)};
`;

export const BottomContainer = styled.View`
  flex: 1;
  padding: ${ratioPx(36)} ${ratioPx(24)} ${ratioPx(24)};
`;

export const DayPickerSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DayPickerTitle = styled.View`
  flex: 1;
`;

export const DayPickerTitleText = styled.Text`
  font-weight: 700;
  font-size: ${ratioPx(16)};
  line-height: ${ratioPx(24)};
`;

export const DayPickerRow = styled.View`
  flex-direction: row;
  gap: ${ratioPx(8)};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
