import { atom } from 'recoil';
import { User } from './types';

export const userAtom = atom<User | null>({
  key: 'user',
  default: null,
});

export const tokenAtom = atom<string | null>({
  key: 'token',
  default: null,
});
