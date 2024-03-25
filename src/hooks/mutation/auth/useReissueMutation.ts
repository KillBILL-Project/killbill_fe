import { useMutation } from '@tanstack/react-query';
import { requestReissue } from '../../../services/api/authService';
import UseAuth from '../../useAuth';

const useReissueMutation = () => {
  const { setTokens } = UseAuth();

  return useMutation({
    mutationFn: requestReissue,
    mutationKey: ['reissue'],
    onSuccess: data => {
      setTokens(data.data.data);
    },
  });
};
export default useReissueMutation;
