import { Dispatch, SetStateAction } from 'react';
import api from '../utils/api';

interface EmailLoginProps {
  data: string;
  setInLoginProgress: Dispatch<SetStateAction<boolean>>;
}

interface EmailRegisterProps {
  data: string;
  setInRegisterProgress: Dispatch<SetStateAction<boolean>>;
}

export const emailLogin = async ({ data, setInLoginProgress }: EmailLoginProps) => {
  try {
    setInLoginProgress(true);

    return await api.post('/auth/login', data, {
      headers: { 'Content-Type': `application/json` },
    });
  } catch (error) {
    return error;
  } finally {
    setInLoginProgress(false);
  }
};

export const emailRegister = async ({ data, setInRegisterProgress }: EmailRegisterProps) => {
  try {
    setInRegisterProgress(true);

    return await api.post('/auth/register', data, {
      headers: { 'Content-Type': `application/json` },
    });
  } catch (error) {
    return error;
  } finally {
    setInRegisterProgress(false);
  }
};
