import { atom } from 'recoil';
import { ITrashCanLocation } from '../services/api/trashService';

export const trashFilterState = atom<any>({
  key: 'trashFilter ',
  default: 'BIG',
});

export const selectedTrashType = atom<string[] | null>({
  key: 'selectedTrashType',
  default: null,
});

export const activeTrashCanDetail = atom<ITrashCanLocation | null>({
  key: 'activeTrashCanDetail',
  default: null,
});
