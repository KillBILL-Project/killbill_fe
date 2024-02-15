import { AxiosResponse } from 'axios';
import api, { apiWithoutInterceptor } from '../utils/api';
import { WwoossResponse } from '../../types/common';
import { loadRefreshToken } from '../storage/encryptedStorage';
import { LoginRequest, RegisterRequest, User } from '../../types/auth';

export const requestLogin = async <T>(
  params: LoginRequest,
): Promise<AxiosResponse<WwoossResponse<T>>> => {
  return api.post('/auth/login', params);
};

export const requestRegister = async <T>(
  params: RegisterRequest,
): Promise<AxiosResponse<WwoossResponse<T>>> => {
  return api.post('/auth/register', params);
};

export const requestReissue = async <T>(): Promise<AxiosResponse<WwoossResponse<T>>> => {
  const refreshToken = await loadRefreshToken();
  return apiWithoutInterceptor.post('/auth/reissue', null, {
    headers: { Authorization: refreshToken ? `Bearer ${refreshToken}` : null },
  });
};

export const getUserInfo = async (): Promise<AxiosResponse<WwoossResponse<User>>> => {
  return api.get('/user');
};

export const updatePushConsent = async (params: {
  pushConsent: boolean;
}): Promise<AxiosResponse<WwoossResponse<void>>> => {
  return api.patch('/user/push-consent', params);
};

export const requestWithdrawal = async () => {
  return api.delete('/auth/withdrawal');
};

export const requestChangePassword = async (params: { password: string }) => {
  return api.patch('/auth/change-password', params);
};
