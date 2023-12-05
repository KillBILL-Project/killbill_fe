import { atom } from 'recoil';
import { User } from '../types/states/auth';

export const userAtom = atom<User | null>({
  key: 'user',
  default: null,
});

export const tokenAtom = atom<string | null>({
  key: 'token',
  default: null,
});
