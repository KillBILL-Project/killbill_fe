import api from '../utils/api';
import { ApiResponse } from '../../types/common';
import { loadRefreshToken } from '../storage/encryptedStorage';
import { LoginRequest, LoginResponse, RegisterRequest, User } from '../../types/auth';

export interface UpdateFcmTokenParams {
  fcmToken: string;
}

export const requestLogin = async <T>(params: LoginRequest): ApiResponse<T> => {
  return api.post('/auth/login', params);
};

export const requestRegister = async <T>(params: RegisterRequest): ApiResponse<T> => {
  return api.post('/auth/register', params);
};

export const requestReissue = async (): ApiResponse<LoginResponse> => {
  const refreshToken = await loadRefreshToken();
  return api.post('/auth/reissue', null, {
    headers: { Authorization: refreshToken ? `Bearer ${refreshToken}` : null },
  });
};

export const getUserInfo = async (): ApiResponse<User> => {
  return api.get('/user');
};

export const updatePushConsent = async (params: { pushConsent: boolean }): ApiResponse<void> => {
  return api.patch('/user/push-consent', params);
};

export const requestWithdrawal = async () => {
  return api.delete('/auth/withdrawal');
};

export const requestChangePassword = async (params: { password: string }) => {
  return api.patch('/auth/change-password', params);
};

export const createLoginLog = async (): ApiResponse<void> => {
  return api.post('/compliment-condition-log/login');
};

export const updateFcmToken = async (params: UpdateFcmTokenParams) => {
  return api.patch('/user/fcm-token', params);
};
