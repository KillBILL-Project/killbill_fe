import { Dispatch, SetStateAction } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { api } from '../utils/api';
import { LoginFormType, ResponseType } from '../../types/common';
import { getRefreshToken } from '../storage/localStorage';

interface EmailLoginProps {
  params: LoginFormType;
  setInLoginProgress: Dispatch<SetStateAction<boolean>>;
}

interface EmailRegisterProps {
  data: string;
  setInRegisterProgress: Dispatch<SetStateAction<boolean>>;
}

/**
 * 전체적으로 에러를 단순히 error.reponse로 리턴해주는데 그냥 interceptor에서 일괄 처리 안되나?
 */

export const login = async <T>({
  params,
  setInLoginProgress,
}: EmailLoginProps): Promise<AxiosResponse<ResponseType<T>>> => {
  try {
    setInLoginProgress(true);

    return await api.post('/auth/login', params, {
      headers: { 'Content-Type': `application/json` },
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log('에러입니다.ㅇ');
      return error.response;
    }
    throw new Error('예상치 못한 에러'); // 예상한 에러가 아닐 때는 어떻게 처리를 해야하지...?
  } finally {
    setInLoginProgress(false);
  }
};

export const register = async <T>({
  data,
  setInRegisterProgress,
}: EmailRegisterProps): Promise<AxiosResponse<ResponseType<T>>> => {
  try {
    setInRegisterProgress(true);

    return await api.post('/auth/register', data, {
      headers: { 'Content-Type': `application/json` },
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error('예상치 못한 에러'); // 예상한 에러가 아닐 때는 어떻게 처리를 해야하지...?
  } finally {
    setInRegisterProgress(false);
  }
};

export const reissue = async <T>(): Promise<AxiosResponse<ResponseType<T>>> => {
  const refreshToken = await getRefreshToken();
  try {
    return await api.post('/auth/reissue', null, {
      headers: { Authorization: refreshToken ? `Bearer ${refreshToken}` : null },
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error('예상치 못한 에러'); // 예상한 에러가 아닐 때는 어떻게 처리를 해야하지...?
  }
};
