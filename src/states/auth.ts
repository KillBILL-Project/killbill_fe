import { atom } from 'recoil';
import { User } from '../types/auth';

export const userState = atom<User | null>({
  key: 'user',
  default: null,
});

export const tokenState = atom<string | null>({
  key: 'accessToken',
  default: null,
});
