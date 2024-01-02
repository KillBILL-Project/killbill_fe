import { atom } from 'recoil';
import { User } from '../types/states/auth';

export const userState = atom<User | null>({
  key: 'user',
  default: null,
});

export const tokenState = atom<string | null>({
  key: 'accessToken',
  default: null,
});
