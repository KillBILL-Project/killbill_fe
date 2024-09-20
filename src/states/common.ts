import { atom } from 'recoil';
import { windowHeight } from '@utils/platform';

export const inProgressState = atom<boolean>({
  key: 'inProgress',
  default: false,
});

export const screenHeightState = atom<number>({
  key: 'screenHeight',
  default: windowHeight,
});
