import React, { useCallback, useEffect, useState } from 'react';
import 'moment/locale/ko';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { isEmpty, toNumber } from 'lodash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Screen from '../../../../components/Screen/Screen';
import {
  BottomContainer,
  ButtonContainer,
  Container,
  MeridiemScroll,
  TimePicker,
  TimePickerContainer,
  TimeScroll,
  WeeklyPicker,
  WeeklyPickerContainer,
  WeeklyPickerTitle,
} from './AlarmSettingScreen.style';
import ScrollPicker from './components/ScrollPicker';
import Spacer from '../../../../components/Spacer';
import { Bold16 } from '../../../../components/Typography';
import { BLACK, LIGHT, WHITE } from '../../../../constants/colors';
import DailyButton from './components/DailyButton';
import { weekly } from '../../../../constants/constants';
import { HomeStackParamList } from '../../../../types/navigation';
import { AlarmParams, AlarmType } from '../../../../types/notifications';
import BaseButton from '../../../auth/components/BaseButton/BaseButton';
import { createAlarm, updateAlarm } from '../../../../services/api/alarmService';
import useToast from '../../../../hooks/useToast';
import { ratio } from '../../../../utils/platform';

const meridiems = ['오전', '오후'];
const hours = Array.from({ length: 12 }, (_, i) => `${i}`);
const minutes = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));

const AlarmSettingScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'AlarmSetting'>>();
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
        return Promise.reject(new Error('선택된 요일이 없습니다.'));
      }

      if (alarmParams.alarmId) await updateAlarm(alarmParams);
      else await createAlarm(alarmParams);

      return Promise.resolve();
    },
  });

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

  useEffect(() => {
    if (isSuccess) {
      (async () => {
        await queryClient.invalidateQueries({ queryKey: ['alarm'] });
        navigation.goBack();
      })();
    }
  }, [isSuccess, navigation, queryClient]);

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
                fontSize={ratio * 22}
                fontWeight={400}
              />
            </MeridiemScroll>
            <TimeScroll>
              <ScrollPicker
                itemList={hours}
                value={alarm.hour}
                setValue={setAlarmProps('hour')}
                fontSize={ratio * 40}
                fontWeight={500}
              />
              <Spacer width={32} />
              <ScrollPicker
                itemList={[':']}
                setValue={() => {}}
                fontSize={ratio * 40}
                fontWeight={500}
              />
              <Spacer width={32} />
              <ScrollPicker
                itemList={minutes}
                value={alarm.minute}
                setValue={setAlarmProps('minute')}
                fontSize={ratio * 40}
                fontWeight={500}
              />
            </TimeScroll>
          </TimePicker>
        </TimePickerContainer>
        <BottomContainer>
          <WeeklyPickerContainer>
            <WeeklyPickerTitle>
              <Bold16 color={BLACK}>매주</Bold16>
            </WeeklyPickerTitle>
            <WeeklyPicker>
              {weekly.map(item => (
                <DailyButton
                  key={item.value}
                  day={item.text}
                  isSelected={alarm.dayOfWeek.includes(item.value)}
                  onPress={() => onPressDailyButton(item.value)}
                />
              ))}
            </WeeklyPicker>
          </WeeklyPickerContainer>
          <ButtonContainer>
            <BaseButton text="저장" onPress={onPressSaveAlarm} />
          </ButtonContainer>
        </BottomContainer>
      </Container>
    </Screen>
  );
};

export default AlarmSettingScreen;
