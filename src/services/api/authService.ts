import axios, { AxiosResponse } from 'axios';
import api from '../utils/api';
import { LoginFormType, RegisterType, WwoossResponse } from '../../types/common';
import { loadRefreshToken } from '../storage/encryptedStorage';

export const requestLogin = async <T>(
  params: LoginFormType,
): Promise<AxiosResponse<WwoossResponse<T>>> => {
  return api.post('/auth/login', params);
};

export const requestRegister = async <T>(
  params: RegisterType,
): Promise<AxiosResponse<WwoossResponse<T>>> => {
  return api.post('/auth/register', params);
};

export const requestReissue = async <T>(): Promise<AxiosResponse<WwoossResponse<T>>> => {
  const refreshToken = await loadRefreshToken();
  return axios.post('http://localhost:9090/api/v1/auth/reissue', null, {
    headers: { Authorization: refreshToken ? `Bearer ${refreshToken}` : null },
  });
};
