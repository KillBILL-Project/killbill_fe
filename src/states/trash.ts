import { atom } from 'recoil';

export const trashFilterState = atom<any>({
  key: 'trashFilter ',
  default: 'BIG',
});

export const selectedTrashType = atom<string[] | null>({
  key: 'selectedTrashType',
  default: null,
});
