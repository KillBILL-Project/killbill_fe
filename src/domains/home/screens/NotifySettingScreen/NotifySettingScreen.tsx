import React, { useCallback, useEffect, useState } from 'react';
import 'moment/locale/ko';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { isEmpty, toNumber } from 'lodash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Screen from '../../../../components/Screen/Screen';
import {
  Container,
  Footer,
  MeridiemScroll,
  TimePicker,
  TimePickerContainer,
  TimeScroll,
  WeeklyPicker,
  WeeklyPickerContainer,
  WeeklyPickerTitle,
} from './NotifySettingScreen.style';
import ScrollPicker from './components/ScrollPicker';
import Spacer from '../../../../components/Spacer';
import { Bold16 } from '../../../../components/Typography';
import { BLACK, LIGHT } from '../../../../constants/colors';
import DailyButton from './components/DailyButton';
import { weekly } from '../../../../constants/constants';
import { HomeStackParamList } from '../../../../types/navigation';
import { AlarmParams, AlarmType } from '../../../../types/notifications';
import BaseButton from '../../../auth/components/BaseButton/BaseButton';
import { createAlarm, updateAlarm } from '../../../../services/api/alarmService';
import useToast from '../../../../hooks/useToast';

const meridiems = ['오전', '오후'];
const hours = Array.from({ length: 12 }, (_, i) => `${i}`);
const minutes = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));

const NotifySettingScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'NotifySetting'>>();
  const [alarm, setAlarm] = useState<AlarmParams>({ ...params });
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation({
    mutationFn: async () => {
      const alarmParams: AlarmType = {
        alarmId: alarm.alarmId,
        dayOfWeekList: [...alarm.dayOfWeek],
        sendHour: alarm.meridiem === '오후' ? toNumber(alarm.hour) + 12 : toNumber(alarm.hour),
        sendMinute: toNumber(alarm.minute),
      };

      if (isEmpty(alarmParams.dayOfWeekList)) {
        showToast({ isFailed: true, message: '적어도 하나의 요일을 선택해주세요.' });
        return;
      }

      if (alarmParams.alarmId) {
        await updateAlarm(alarmParams);
      } else {
        await createAlarm(alarmParams);
      }
    },
  });

  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ['alarm'] });
    navigation.goBack();
  }

  const setAlarmProps = <K extends keyof AlarmParams>(key: K) => {
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

  const onPressSaveAlarm = () => mutate();

  return (
    <Screen title="알림 설정" isHeaderShown={false}>
      <Container>
        <TimePickerContainer colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
          <TimePicker>
            <MeridiemScroll>
              <ScrollPicker
                itemList={meridiems}
                value={alarm.meridiem}
                setValue={setAlarmProps('meridiem')}
                fontSize={22}
                fontWeight={400}
              />
            </MeridiemScroll>
            <TimeScroll>
              <ScrollPicker
                itemList={hours}
                value={alarm.hour}
                setValue={setAlarmProps('hour')}
                fontSize={40}
                fontWeight={500}
              />
              <Spacer width={32} />
              <ScrollPicker itemList={[':']} setValue={() => {}} fontSize={40} fontWeight={500} />
              <Spacer width={32} />
              <ScrollPicker
                itemList={minutes}
                value={alarm.minute}
                setValue={setAlarmProps('minute')}
                fontSize={40}
                fontWeight={500}
              />
            </TimeScroll>
          </TimePicker>
        </TimePickerContainer>
        <WeeklyPickerContainer>
          <WeeklyPickerTitle>
            <Bold16 color={BLACK}>매주</Bold16>
          </WeeklyPickerTitle>
          <WeeklyPicker>
            {weekly.map((item, index) => (
              <DailyButton
                key={item.value}
                day={item.text}
                isSelected={alarm.dayOfWeek.includes(item.value)}
                onPress={() => onPressDailyButton(item.value)}
              />
            ))}
          </WeeklyPicker>
        </WeeklyPickerContainer>
      </Container>
      <Footer>
        <BaseButton text="저장" onPress={onPressSaveAlarm} />
      </Footer>
    </Screen>
  );
};

export default NotifySettingScreen;
