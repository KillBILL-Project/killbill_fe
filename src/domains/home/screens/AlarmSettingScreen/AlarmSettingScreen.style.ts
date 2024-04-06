import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ratioPx } from '../../../../utils/platform';

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
`;

export const WeeklyPickerContainer = styled.View`
  margin: ${ratioPx(36)} ${ratioPx(24)};
  flex-direction: row;
  align-items: center;
`;

export const WeeklyPickerTitle = styled.View`
  flex: 1;
`;

export const WeeklyPicker = styled.View`
  flex-direction: row;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${ratioPx(36)};
`;
