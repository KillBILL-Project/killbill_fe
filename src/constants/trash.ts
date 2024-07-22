import plastic from '@assets/image/home/plastic.png';
import can from '@assets/image/home/can.png';
import glass from '@assets/image/home/glass.png';
import paper from '@assets/image/home/paper.png';
import vinyl from '@assets/image/home/vinyl.png';
import common from '@assets/image/home/common.png';

import { TTrashType } from '@type/trash';

export const TrashCategoryKr = ['병', '종이', '플라스틱', '캔', '비닐', '기타'] as const;
export const TrashCategoryEn = ['GLASS', 'PAPER', 'PLASTIC', 'CAN', 'VINYL', 'COMMON'] as const;

export const trashCategory = [
  { name: 'GLASS', image: glass },
  { name: 'PAPER', image: paper },
  { name: 'PLASTIC', image: plastic },
  { name: 'CAN', image: can },
  { name: 'VINYL', image: vinyl },
  { name: 'COMMON', image: common },
];

export const TRASH_TYPE_LIST: { id: number; trashType: TTrashType | null; name: string }[] = [
  {
    id: 0,
    trashType: null,
    name: '전체검색',
  },
  {
    id: 1,
    trashType: 'CAN',
    name: '캔',
  },
  {
    id: 2,
    trashType: 'PLASTIC',
    name: '플라스틱',
  },
  {
    id: 3,
    trashType: 'PET',
    name: '페트병',
  },
  {
    id: 4,
    trashType: 'GLASS',
    name: '병',
  },
  {
    id: 5,
    trashType: 'VINYL',
    name: '비닐',
  },
  {
    id: 6,
    trashType: 'PAPER',
    name: '종이',
  },
  {
    id: 7,
    trashType: 'VASSEL',
    name: '빈용기',
  },
  {
    id: 8,
    trashType: 'COMMON',
    name: '기타',
  },
];
