import { useEffect } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import api from '../services/utils/api';
import { tokenState } from '../states';
import { requestReissue } from '../services/api/authService';
import { WwoossResponse } from '../types/common';
import UseAuth from './useAuth';
import useToast from './useToast';

const useInterceptor = () => {
  const { showToast } = useToast();
  const accessToken = useRecoilValue(tokenState);
  const { setTokens, clearTokens } = UseAuth();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      config => {
        const requestConfig = { ...config };
        if (config.url !== '/auth/reissue') {
          requestConfig.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
        }
        return requestConfig;
      },
      error => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = api.interceptors.response.use(
      (response: AxiosResponse) => {
        return { ...response };
      },
      async error => {
        console.error('error : ', error);
        const { config, response } = error;
        if (response && +response.status === 401 && !config?.isRetryRequest) {
          config.isRetryRequest = true;
          console.log('401');
          const reissueResponse = await requestReissue();
          if (+reissueResponse.status === 401 || !reissueResponse.data.data?.accessToken) {
            // TODO: 로그아웃 처리
            await clearTokens();
            return Promise.reject(error);
          }

          await setTokens(reissueResponse.data.data);

          return api({
            ...config,
            headers: { Authorization: `Bearer ${reissueResponse.data.data.accessToken}` },
          });
        }

        if (error.response!.status >= 400) {
          // TODO: 에러 메세지 토스트
          const errorData = error.response?.data as WwoossResponse<unknown>;
          showToast({ isFailed: true, message: errorData.message });
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, clearTokens, setTokens, showToast]);
};

export default useInterceptor;
