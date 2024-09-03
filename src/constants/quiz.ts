export interface GetQuizHistoryParams {
  page: number;
  size?: number;
}

export interface GetWwoossTokenParams {
  issueType?: 'QUIZ';
}

export interface WwoossTokenType {
  wwoossTokenId: number;
  issueType: string;
  value: number;
}

export interface GetQuizParams {
  quizId: number;
  enabled?: boolean;
}

export interface SolveQuizParams {
  quizInfo: QuizInfoType;
  answer: string | number;
}

export type QuizResultType = 'PASS' | 'FAIL';

export type QuizHistoryStatusType = 'UNSOLVED' | 'PASS' | 'FAIL' | 'ISSUED';

export interface QuizStatusType {
  color: string;
}

export interface QuizHistoryInfoType {
  createdAt: string;
  quizHistoryId: number;
  quizId: number;
  tokenValue: number;
  status: QuizHistoryStatusType;
}

export interface QuizHistoryType {
  hasNext: boolean;
  quizHistoryInfoList: QuizHistoryInfoType[];
}

export const quizStatus: { [key in QuizHistoryStatusType]: QuizStatusType } = {
  FAIL: { color: '#FFCBD4' },
  ISSUED: { color: '#EBFFCF' },
  PASS: { color: 'cyan' },
  UNSOLVED: { color: 'violet' },
};

export type QuizType = 'MULTI_CHOICE' | 'OX' | 'SHORT_ANSWER';

export type QuizOptionType = {
  optionId: number;
  value: string;
};

export interface QuizInfoType {
  quizId: number;
  question: string;
  correctRate: number;
  quizType: QuizType;
  imagePath: string;
  options: QuizOptionType[];
}
