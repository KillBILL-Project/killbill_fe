import api from '@services/utils/api';
import { objectToQueryParam } from '@utils/common';
import {
  GetQuizHistoryParams,
  GetQuizParams,
  GetWwoossTokenParams,
  QuizHistoryType,
  QuizInfoType,
  QuizResultType,
  SolveQuizParams,
  WwoossTokenType,
} from '@constants/quiz';

export const getQuizHistory = async (params: GetQuizHistoryParams): Promise<QuizHistoryType> => {
  const queryParam = objectToQueryParam({ size: 5, ...params });
  const response = await api.get(`/quiz-history?${queryParam}`);
  return response.data.data;
};

export const patchQuizHistoryToIssuedStatus = async (quizHistoryId: number): Promise<void> => {
  await api.patch(`/quiz-history/${quizHistoryId}/issued-status`);
};

export const getWwoossToken = async (params: GetWwoossTokenParams): Promise<number> => {
  const queryParam = objectToQueryParam(params);
  const response = await api.get(`/wallet/wwooss-token?${queryParam}`);
  return response.data.data;
};

export const issueWwoossToken = async (params: GetWwoossTokenParams): Promise<WwoossTokenType> => {
  const response = await api.post('/wwooss-token', params);
  return response.data.data;
};

export const getQuiz = async (params: GetQuizParams): Promise<QuizInfoType> => {
  const response = await api.get(`/quiz/${params.quizId}`);
  return response.data.data;
};

export const solveQuiz = async (params: SolveQuizParams): Promise<QuizResultType> => {
  const queryParam = objectToQueryParam({ answer: params.answer });
  const response = await api.patch(`/quiz/${params.quizInfo.quizId}?${queryParam}`);
  return response.data.data;
};
