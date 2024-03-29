import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { toString } from 'lodash';
import { useSetRecoilState } from 'recoil';
import Screen from '../../../../components/Screen/Screen';
import { Container, Footer } from './NotifyListScreen.style';
import Notify from './components/Notify/Notify';
import BaseButton from '../../../auth/components/BaseButton/BaseButton';
import { MAIN, WHITE } from '../../../../constants/colors';
import { HomeStackParamList } from '../../../../types/navigation';
import { getAlarm } from '../../../../services/api/alarmService';
import { AlarmParams } from '../../../../types/notifications';
import { inProgressState } from '../../../../states';

const defaultAlarm = {
  dayOfWeek: [],
  meridiem: '오전',
  hour: '0',
  minute: '00',
};

const NotifyListScreen = () => {
  const setInProgress = useSetRecoilState(inProgressState);
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  const { data, isLoading } = useQuery({
    queryKey: ['alarm'],
    queryFn: async () => {
      const response = await getAlarm();
      const alarmList = response.data.data;

      return alarmList.map((alarm): AlarmParams => {
        const isPm = alarm.sendHour > 11;
        const meridiem = isPm ? '오후' : '오전';
        const hour = isPm ? toString(alarm.sendHour - 12) : toString(alarm.sendHour);
        const minute = alarm.sendMinute < 10 ? `0${alarm.sendMinute}` : toString(alarm.sendMinute);

        return {
          alarmId: alarm.alarmId,
          meridiem,
          hour,
          minute,
          dayOfWeek: [...alarm.dayOfWeekList],
        };
      });
    },
  });

  useEffect(() => setInProgress(isLoading), [setInProgress, isLoading]);

  const onPressAddAlarm = () => {
    navigate('NotifySetting', defaultAlarm);
  };

  return (
    <Screen title="알림 설정">
      <Container>
        <FlatList
          data={data}
          renderItem={({ item }) => <Notify {...item} />}
          keyExtractor={(item, index) => toString(index) + item.hour + item.minute}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      <Footer>
        <BaseButton
          text="알림 추가"
          color={WHITE}
          backgroundColor={MAIN}
          onPress={onPressAddAlarm}
        />
      </Footer>
    </Screen>
  );
};

export default NotifyListScreen;
