import { ApiResponse } from '@type/common';
import api from '@services/utils/api';

export type CardCategory = 'WEEKLY' | 'INTEGRATE';

export interface ComplimentCardType {
  complimentCardId: number;
  title: string;
  contents: string;
  cardType: string;
  cardImage: string;
}

export interface ComplimentCardResponse {
  complimentCardResponses: ComplimentCardType[];
  hasNext: boolean;
}

/**
 * 칭찬 카드 조회
 * {
 *   card-type: WEEKLY | INTEGRATE
 *   page: number
 * }
 * @param cardCategory
 * @param page
 */
export const getComplimentCard = async (
  cardCategory: CardCategory,
  page = 0,
): Promise<ComplimentCardResponse & { nextPage: number }> => {
  const { data } = await api.get(`/compliment-card`, {
    params: {
      'card-type': cardCategory,
      page,
      size: 15,
    },
  });

  return { ...data.data, nextPage: page + 1 };
};

// 칭찬 카드 상세 조회
export const getComplimentCardDetail = (complimentCardId: number): ApiResponse<any> => {
  return api.get(`/compliment-card/${complimentCardId}`);
};
