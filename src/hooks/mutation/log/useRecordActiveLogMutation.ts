import { useMutation } from '@tanstack/react-query';
import { recordActiveLog } from '@services/api/logService';
import { RecordActiveLogParams } from '@constants/log';

const useRecordActiveLogMutation = () => {
  return useMutation({
    mutationFn: (params: RecordActiveLogParams) => recordActiveLog(params),
    mutationKey: ['record-active-log'],
  });
};

export default useRecordActiveLogMutation;
