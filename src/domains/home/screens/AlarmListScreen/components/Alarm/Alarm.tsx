import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Container,
  CycleContainer,
  DayContainer,
  NonSelectedDay,
  SelectedDay,
  TimeContainer,
  TimeTest,
} from './Alarm.style';
import { Bold12, Regular16, Regular18 } from '../../../../../../components/Typography';
import { BLACK, GREY500, WHITE } from '../../../../../../constants/colors';
import Spacer from '../../../../../../components/Spacer/Spacer';
import { styles, weekly } from '../../../../../../constants/constants';
import { HomeStackParamList } from '../../../../../../types/navigation';
import { AlarmParams } from '../../../../../../types/notifications';

const Alarm = ({ alarmId, hour, minute, meridiem, dayOfWeek }: AlarmParams) => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  const onPress = () => {
    navigate('AlarmSetting', { alarmId, hour, minute, meridiem, dayOfWeek });
  };

  return (
    <Container style={styles.shadow} onPress={onPress}>
      <TimeContainer>
        <TimeTest>{`${hour}:${minute}`}</TimeTest>
        <Spacer width={8} />
        <Regular18 color={BLACK}>{meridiem}</Regular18>
      </TimeContainer>
      <CycleContainer>
        <Regular16 color={BLACK}>매주</Regular16>
        <DayContainer>
          {weekly.map(item => {
            return dayOfWeek.includes(item.value) ? (
              <SelectedDay key={item.value}>
                <Bold12 color={WHITE}>{item.text}</Bold12>
              </SelectedDay>
            ) : (
              <NonSelectedDay key={item.value}>
                <Bold12 color={GREY500}>{item.text}</Bold12>
              </NonSelectedDay>
            );
          })}
        </DayContainer>
      </CycleContainer>
    </Container>
  );
};

export default Alarm;
