import { useRecoilState, useSetRecoilState } from 'recoil';
import { isFailedState, isShowToastState, toastMessageState } from '../states';

interface ShowToastProps {
  isFailed?: boolean;
  message: string;
}

const useToast = () => {
  const [isShowToast, setIsShowToast] = useRecoilState(isShowToastState);
  const setIsFailed = useSetRecoilState(isFailedState);
  const setToastMessage = useSetRecoilState(toastMessageState);

  const showToast = ({ isFailed = false, message }: ShowToastProps) => {
    if (isShowToast) {
      setIsShowToast(false);
      setTimeout(() => setIsShowToast(true), 50);
    } else {
      setIsShowToast(true);
    }

    setIsFailed(isFailed);
    setToastMessage(message);
  };

  return { showToast };
};

export default useToast;
