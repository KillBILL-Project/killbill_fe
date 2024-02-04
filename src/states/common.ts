import { atom } from 'recoil';

export const inProgressState = atom<boolean>({
  key: 'inProgress',
  default: false,
});
