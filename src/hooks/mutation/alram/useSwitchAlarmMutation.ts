import { useMutation, useQueryClient } from '@tanstack/react-query';
import { switchAlarm } from '@services/api/alarmService';

const useSwitchAlarmMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: switchAlarm,
    mutationKey: ['switch-alarm'],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['alarm'] });
    },
  });
};

export default useSwitchAlarmMutation;
