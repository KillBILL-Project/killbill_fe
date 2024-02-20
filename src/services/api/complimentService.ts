import { AxiosResponse } from 'axios';
import api from '../utils/api';
import { WwoossResponse } from '../../types/common';
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
): Promise<AxiosResponse<WwoossResponse<ComplimentCardResponse>>> => {
  const queryParam = objectToQueryParam(params);

  return api.get(`/compliment-card?${queryParam}`);
};

// 칭찬 카드 상세 조회
export const getComplimentCardDetail = (
  complimentCardId: number,
): Promise<AxiosResponse<WwoossResponse<any>>> => {
  return api.get(`/compliment-card/${complimentCardId}`);
};
