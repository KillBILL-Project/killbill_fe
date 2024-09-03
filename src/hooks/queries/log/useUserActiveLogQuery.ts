import { getUserActiveLog } from '@services/api/logService';
import { useQuery } from '@tanstack/react-query';

const useUserActiveLogQuery = () => {
  const { data } = useQuery({
    queryFn: getUserActiveLog,
    queryKey: ['user-active-log'],
  });

  return { data };
};

export default useUserActiveLogQuery;
