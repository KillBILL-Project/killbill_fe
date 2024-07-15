import { scale } from '@utils/platform';

export const meridiems = ['오전', '오후'];
export const hours = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}`,
  value: (i + 1) % 12,
}));
export const minutes = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
export const ITEM_HEIGHT = scale(66);
