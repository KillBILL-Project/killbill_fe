import React from 'react';
import { View } from 'react-native';
import {
  Container,
  CycleContainer,
  DayContainer,
  NonSelectedDay,
  SelectedDay,
  TimeContainer,
} from './Notify.style';
import { Bold18, Medium14, Regular12, Regular14 } from '../../../../../../components/Typography';
import { BLACK, GREY500, WHITE } from '../../../../../../constants/colors';
import { getDayOfWeek2 } from '../../../../../../utils/common';
import Spacer from '../../../../../../components/Spacer/Spacer';
import { styles } from '../../../../../../constants/constants';

interface NotifyProps {
  time: string;
  amOrPm: string;
  selectedDays: { day: number; isSelected: boolean }[];
}

const Notify = ({ time, amOrPm, selectedDays }: NotifyProps) => {
  return (
    <View>
      <Container style={styles.shadow}>
        <TimeContainer>
          <Bold18 color={BLACK}>{time}</Bold18>
          <Spacer width={8} />
          <Medium14 color={BLACK}>{amOrPm}</Medium14>
        </TimeContainer>
        <CycleContainer>
          <Regular14 color={BLACK}>매주</Regular14>
          <DayContainer>
            {selectedDays.map(item => {
              return item.isSelected ? (
                <SelectedDay>
                  <Regular12 color={WHITE}>{getDayOfWeek2(item.day)}</Regular12>
                </SelectedDay>
              ) : (
                <NonSelectedDay>
                  <Regular12 color={GREY500}>{getDayOfWeek2(item.day)}</Regular12>
                </NonSelectedDay>
              );
            })}
          </DayContainer>
        </CycleContainer>
      </Container>
    </View>
  );
};

export default Notify;
