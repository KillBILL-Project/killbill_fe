import { SocialRegisterParams } from './auth';
import { AlarmParams, AlarmType } from './notifications';
import { ReportDetailParams } from './report';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  AuthDetail: SocialRegisterParams;
  ForgotPassword: undefined;
};

export type HomeStackParamList = MyPageParamList & {
  Tab: HomeTabParamList;
  NotifySetting: AlarmParams;
};

export type HomeTabParamList = {
  Home: undefined;
  Location: undefined;
  Report: undefined;
  MyPage: undefined;
};

export type MyPageParamList = TopMenuParamList &
  MenuParamList & {
    Notification: undefined;
  };

export type TopMenuParamList = {
  NotifyList: undefined;
  MyHistory: undefined;
  UserGuide: undefined;
};

export type MenuParamList = {
  Faq: undefined;
  PraiseCard: undefined;
  Setting: undefined;
  UserGuide: undefined;
  MyInfo: undefined;
  ReportDetail: ReportDetailParams;
  ResetPassword: undefined;
  EmptyTrash: undefined;
  WebView: undefined;
};
