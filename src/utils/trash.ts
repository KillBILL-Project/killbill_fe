import { find } from 'lodash';
import { trashMeta } from '../constants/data';

export type TrashCategory = '유리' | '종이' | '플라스틱' | '캔' | '비닐' | '기타';
export type TrashCategoryEn = 'GLASS' | 'PAPER' | 'CAN' | 'PLASTIC' | 'VINYL' | 'COMMON';

const isEnglishOnly = (value: string): boolean => {
  const englishRegex = /^[A-Za-z]+$/;
  return englishRegex.test(value);
};

export const getColorOfTrashCategory = (category: TrashCategory | TrashCategoryEn) => {
  if (isEnglishOnly(category)) {
    return trashMeta[category].color;
  }

  return find(trashMeta, { name: category }).color;
};
