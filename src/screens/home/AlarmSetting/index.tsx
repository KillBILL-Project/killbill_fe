import React, { useCallback, useState } from 'react';
import 'moment/locale/ko';
import { RouteProp, useRoute } from '@react-navigation/native';
import { toNumber } from 'lodash';
import { BLACK, LIGHT, WHITE } from '@constants/colors';
import { weekly } from '@constants/constants';
import { HomeStackParamList } from '@type/navigation';
import { AlarmParams } from '@type/notifications';
import { scale } from '@utils/platform';
import Screen from '@components/Screen';
import BaseButton from '@components/BaseButton';
import { hours, meridiems, minutes } from '@screens/home/AlarmSetting/constant';
import useUpdateAlarmMutation from '@hooks/mutation/alram/useUpdateAlarmMutation';
import {
  BottomContainer,
  ButtonContainer,
  Container,
  DayPickerRow,
  DayPickerSection,
  DayPickerTitle,
  DayPickerTitleText,
  MeridiemScroll,
  TimePicker,
  TimePickerContainer,
  TimeScroll,
} from './styles';
import ScrollPicker from './ScrollPicker';
import DayPicker from './DailyButton';

const AlarmSettingScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'AlarmSetting'>>();
  const [alarm, setAlarm] = useState<AlarmParams>({ ...params });
  const { mutate: updateAlarm } = useUpdateAlarmMutation();

  const setAlarmProps = <K extends keyof AlarmParams>(key: K) => {
    if (key === 'hour') {
      return (value: AlarmParams[K]) => {
        const result = hours.find(item => item.label === value)?.value;
        setAlarm(prevState => ({ ...prevState, [key]: result }));
      };
    }

    return (value: AlarmParams[K]) => {
      setAlarm(prevState => ({ ...prevState, [key]: value }));
    };
  };

  const onPressDailyButton = useCallback(
    (day: number) => {
      setAlarm(prevState => {
        const dayOfWeek = alarm.dayOfWeek.includes(day)
          ? prevState.dayOfWeek.filter(item => item !== day)
          : [...prevState.dayOfWeek, day];

        return { ...prevState, dayOfWeek };
      });
    },
    [alarm.dayOfWeek],
  );

  const onPressSaveAlarm = useCallback(() => {
    updateAlarm(alarm);
  }, [alarm]);

  return (
    <Screen
      title="알림 설정"
      isHeaderShown
      backButtonColor={WHITE}
      headerColor={BLACK}
      titleColor={WHITE}
    >
      <Container>
        <TimePickerContainer colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
          <TimePicker>
            <MeridiemScroll>
              <ScrollPicker
                itemList={meridiems}
                value={alarm.meridiem}
                setValue={setAlarmProps('meridiem')}
                fontStyle={{ fontSize: scale(22), fontWeight: '400' }}
              />
            </MeridiemScroll>
            <TimeScroll>
              <ScrollPicker
                itemList={hours.map(item => item.label)}
                value={hours.find(item => item.value === toNumber(alarm.hour))?.label ?? '1'}
                setValue={setAlarmProps('hour')}
                fontStyle={{ fontSize: scale(40), fontWeight: '500' }}
              />
              <ScrollPicker
                itemList={[':']}
                setValue={() => {}}
                fontStyle={{ fontSize: scale(40), fontWeight: '500' }}
              />
              <ScrollPicker
                itemList={minutes}
                value={alarm.minute}
                setValue={setAlarmProps('minute')}
                fontStyle={{ fontSize: scale(40), fontWeight: '500' }}
              />
            </TimeScroll>
          </TimePicker>
        </TimePickerContainer>
        <BottomContainer>
          <DayPickerSection>
            <DayPickerTitle>
              <DayPickerTitleText>매주</DayPickerTitleText>
            </DayPickerTitle>
            <DayPickerRow>
              {weekly.map(item => (
                <DayPicker
                  key={item.value}
                  day={item.text}
                  isSelected={alarm.dayOfWeek.includes(item.value)}
                  onPress={() => onPressDailyButton(item.value)}
                />
              ))}
            </DayPickerRow>
          </DayPickerSection>
          <ButtonContainer>
            <BaseButton text="저장" onPress={onPressSaveAlarm} />
          </ButtonContainer>
        </BottomContainer>
      </Container>
    </Screen>
  );
};

export default AlarmSettingScreen;
