import { TrashCategoryEn, TrashCategoryKr } from '@constants/trash';

export type TTrashType =
  | 'PAPER'
  | 'CAN'
  | 'PLASTIC'
  | 'PET'
  | 'GLASS'
  | 'VINYL'
  | 'COMMON'
  | 'VASSEL'
  | null;

export type TrashCategoryKrType = (typeof TrashCategoryKr)[number];
export type TrashCategoryEnType = (typeof TrashCategoryEn)[number];
