import { useEffect } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import { Alert } from 'react-native';
import api from '../services/utils/api';
import { tokenState } from '../states';
import { requestReissue } from '../services/api/authService';
import { LoginResponse } from '../types/common';
import UseAuth from './useAuth';

const useInterceptor = () => {
  const accessToken = useRecoilValue(tokenState);
  const { setTokens, clearTokens } = UseAuth();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      config => {
        const requestConfig = { ...config };
        requestConfig.headers.Authorization =
          requestConfig.headers.Authorization ?? (accessToken ? `Bearer ${accessToken}` : null);
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
      async (error: AxiosError) => {
        if (error.response!.status === 401) {
          const reissueResponse = await requestReissue<LoginResponse>();
          if (reissueResponse.status === 401 || !reissueResponse.data.data?.accessToken) {
            // TODO: 로그아웃 처리
            await clearTokens();
            return Promise.reject(error);
          }

          await setTokens(reissueResponse.data.data);

          return api({
            ...error.config,
            headers: { Authorization: `Bearer ${reissueResponse.data.data.accessToken}` },
          });
        }

        if (error.response!.status >= 400) {
          // TODO: 에러 메세지 토스트
          Alert.alert(error.config!.data.message);
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, clearTokens, setTokens]);
};

export default useInterceptor;
