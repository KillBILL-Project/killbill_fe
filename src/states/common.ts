import { atom } from 'recoil';

export const inProgressState = atom<boolean>({
  key: 'inProgress',
  default: false,
});

export const bottomTabHeightState = atom<number>({
  key: 'bottomTabHeight',
  default: 0,
});

export const blankHeightState = atom<number>({
  key: 'blankHeight',
  default: 0,
});
