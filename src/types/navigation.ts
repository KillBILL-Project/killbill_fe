import { RegisterParams } from './auth';
import { AlarmParams } from './notifications';
import { ReportDetailParams } from './report';
import { UserGuideDetailParams } from '../constants/userGuide';
import { ComplimentCardType } from '../services/api/complimentService';

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
  } & CardDetailParamList;

export type HomeTabParamList = {
  Home: undefined;
  Location: undefined;
  Report: undefined;
  MyPage: undefined;
};

export type MyPageParamList = {
  AlarmList: undefined;
  MyHistory: undefined;
  UserGuide: undefined;
  ComplimentCard: undefined;
  MyInfo: undefined;
  Setting: undefined;
  Faq: undefined;
  Notification: undefined;
  WebView: { url: string };
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
