import { atom } from 'recoil';

export const isShowToastState = atom<boolean>({
  key: 'isShowToast',
  default: false,
});

export const toastMessageState = atom<string>({
  key: 'toastMessage',
  default: '',
});

export const isFailedState = atom<boolean>({
  key: 'isFailed',
  default: false,
});
