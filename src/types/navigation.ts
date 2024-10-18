import { UserGuideDetailParams } from '@constants/userGuide';
import { ComplimentCardType } from '@services/api/complimentService';
import { QuizHistoryStatusType, QuizResultType } from '@constants/quiz';
import { UserActiveLogType } from '@constants/log';
import { RegisterParams } from './auth';
import { AlarmParams } from './notifications';
import { ReportDetailParams } from './report';

// --- Auth Navigation

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  AuthDetail: RegisterParams;
  ForgotPassword: undefined;
  WebView: { url: string };
};

// --- Home Navigation

export type HomeStackParamList = MyPageParamList &
  AlarmListParamList &
  MyInfoParamList &
  UserGuideParamList &
  ReportParamList &
  HomeParamList & {
    Tab: HomeTabParamList;
    Question: { quizId: number; status: QuizHistoryStatusType; quizHistoryId: number };
    QuestionResult: { quizId: number; result: QuizResultType; quizHistoryId: number };
    TokenIssued: {
      recordedActiveLog: UserActiveLogType;
      validatedActiveLog: UserActiveLogType;
      issuedTokenValue: number;
    };
  } & CardDetailParamList;

export type HomeTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Quiz: undefined;
  Location: undefined;
  MyPage: undefined;
};

export type MyPageParamList = {
  Report: undefined;
  AlarmList: undefined;
  MyHistory: undefined;
  UserGuide: undefined;
  ComplimentCard: undefined;
  MyInfo: undefined;
  Setting: undefined;
  Faq: undefined;
  Notification: undefined;
  WebView: { url: string; title: string };
};

export type AlarmListParamList = {
  AlarmSetting: AlarmParams;
};

export type MyInfoParamList = {
  ResetPassword: undefined;
};

export type UserGuideParamList = {
  UserGuideDetail: UserGuideDetailParams;
};

export type ReportParamList = {
  ReportDetail: ReportDetailParams;
};

export type HomeParamList = {
  EmptyTrash: undefined;
};

export type CardDetailParamList = {
  CardDetail: ComplimentCardType;
};
