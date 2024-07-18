import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import api from '@services/utils/api';
import { requestReissue } from '@services/api/authService';
import { tokenState } from '@states/auth';
import UseAuth from './useAuth';
import useToast from './useToast';

const useInterceptor = () => {
  const { showToast } = useToast();
  const accessToken = useRecoilValue(tokenState);
  const { setTokens, clearTokens, logout } = UseAuth();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      config => {
        const requestConfig = { ...config };
        if (config.url !== '/auth/reissue') {

        if (!config.headers.Authorization) {
          requestConfig.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
        }

        if (!requestConfig.headers['Content-Type']) {
          requestConfig.headers['Content-Type'] = 'application/json';
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

        if (config.url === '/auth/reissue') {
          SplashScreen.hide();
          await logout();
          return Promise.reject(error);
        }

        if (config.url !== '/auth/reissue' && response && +response.status === 401) {
          try {
            const reissueResponse = await requestReissue();

            if (!reissueResponse.data.data?.accessToken) {
              await logout();
              return await Promise.reject(error);
            }

            await setTokens(reissueResponse.data.data);

            return await api({
              ...config,
              headers: { Authorization: `Bearer ${reissueResponse.data.data.accessToken}` },
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, clearTokens, logout, setTokens, showToast]);
};

export default useInterceptor;
