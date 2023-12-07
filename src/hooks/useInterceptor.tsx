import { useEffect } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { useRecoilState } from 'recoil';
import { api } from '../services/utils/api';
import { User } from '../types/states/auth';
import { tokenAtom, userAtom } from '../states';
import { reissue } from '../services/api/authService';
import { LoginResponse } from '../types/common';
import UseAuth from './useAuth';

const useInterceptor = () => {
  const [user, setUser] = useRecoilState<User | null>(userAtom);
  const [token, setToken] = useRecoilState<string | null>(tokenAtom);
  const { setTokens, clearTokens } = UseAuth();

  const requestInterceptor = api.interceptors.request.use(
    config => {
      const requestConfig = { ...config };
      requestConfig.headers.Authorization = token ? `Bearer ${token}` : null;
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
      const config = { ...error.config };
      if (error.response!.status === 401) {
        const response = await reissue<LoginResponse>();

        if (response.status === 401 || !response.data.data) {
          // TODO: 로그아웃 토스트
          await clearTokens();
          return null;
        }

        await setTokens(response.data.data);
        return api(config);
      }

      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};

export default useInterceptor;
