import api from '../utils/api';
import { ApiResponse } from '../../types/common';
import { objectToQueryParam } from '../../utils/common';

export interface GetComplimentCardParams {
  'card-type': 'WEEKLY' | 'INTEGRATE';
  page: number;
  size?: number;
}

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
 * @param params
 * {
 *   card-type: WEEKLY | INTEGRATE
 *   page: number
 * }
 */
export const getComplimentCard = (
  params: GetComplimentCardParams,
): ApiResponse<ComplimentCardResponse> => {
  const queryParam = objectToQueryParam(params);

  return api.get(`/compliment-card?${queryParam}`);
};

// 칭찬 카드 상세 조회
export const getComplimentCardDetail = (complimentCardId: number): ApiResponse<any> => {
  return api.get(`/compliment-card/${complimentCardId}`);
};
