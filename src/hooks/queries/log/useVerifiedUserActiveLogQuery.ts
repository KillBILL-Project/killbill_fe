import { getVerifiedUserActiveLog } from '@services/api/logService';
import { useQuery } from '@tanstack/react-query';

const useVerifiedUserActiveLogQuery = () => {
  const { data } = useQuery({
    queryFn: getVerifiedUserActiveLog,
    queryKey: ['verified-user-active-log'],
  });

  return { data };
};

export default useVerifiedUserActiveLogQuery;
