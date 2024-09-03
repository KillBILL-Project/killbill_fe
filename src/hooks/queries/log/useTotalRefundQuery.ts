import { getTotalRefund } from '@services/api/logService';
import { useQuery } from '@tanstack/react-query';

const useTotalRefundQuery = () => {
  const { data } = useQuery({
    queryFn: getTotalRefund,
    queryKey: ['total-refund'],
  });

  return { data };
};

export default useTotalRefundQuery;
