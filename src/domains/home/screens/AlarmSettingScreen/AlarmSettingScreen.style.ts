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

export const BottomContainer = styled.View`
  flex: 1;
  padding: ${ratioPx(36)} ${ratioPx(24)} ${ratioPx(24)};
`;

export const WeeklyPickerContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WeeklyPickerTitle = styled.View`
  flex: 1;
`;

export const WeeklyPicker = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
