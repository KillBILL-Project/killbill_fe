import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlarm } from '@services/api/alarmService';

const useDeleteAlarmMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAlarm,
    mutationKey: ['delete-alarm'],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['alarm'] });
    },
  });
};

export default useDeleteAlarmMutation;
