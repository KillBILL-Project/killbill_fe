import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AlarmParams, AlarmType } from '@type/notifications';
import { isEmpty, toNumber } from 'lodash';
import { createAlarm, updateAlarm } from '@services/api/alarmService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';
import useToast from '@hooks/useToast';

const useUpdateAlarmMutation = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (alarm: AlarmParams) => {
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
    mutationKey: ['mutate-alarm'],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['alarm'] });
      navigation.goBack();
    },
  });
};

export default useUpdateAlarmMutation;
