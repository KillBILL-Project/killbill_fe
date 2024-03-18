import { atom } from 'recoil';

export const trashFilterState = atom<any>({
  key: 'trashFilter ',
  default: 'BIG',
});
