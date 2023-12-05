import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useRecoilState } from 'recoil';
import api from '../services/utils/api';
import { User } from '../types/states/auth';
import { tokenAtom, userAtom } from '../states';

const useInterceptor = () => {
  const [user, setUser] = useRecoilState<User | null>(userAtom);
  const [token, setToken] = useRecoilState<string | null>(tokenAtom);

  const requestInterceptor = api.interceptors.request.use(
    config => {
      const newConfig = { ...config };
      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }

      return newConfig;
    },
    error => {
      return Promise.reject(error);
    },
  );

  const responseInterceptor = api.interceptors.response.use(
    (response: AxiosResponse) => {
      return { ...response.data };
    },
    async error => {
      if (!error.response.data) {
        return Promise.reject(error);
      }
      const {
        // 아직 에러 이후 로직 미구현
        config: originalRequestConfig,
        response: {
          data: { code: errorCode, message: errorMessage },
        },
      } = error;

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
