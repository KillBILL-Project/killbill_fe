import { SocialRegisterParams } from './auth';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  AuthDetail: SocialRegisterParams;
  ForgotPassword: undefined;
};

export type HomeStackParamList = MyPageParamList & {
  Tab: HomeTabParamList;
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
  NotifySetting: undefined;
  MyHistory: undefined;
  UserGuide: undefined;
};

export type MenuParamList = {
  Faq: undefined;
  PraiseCard: undefined;
  Setting: undefined;
  UserGuide: undefined;
  MyInfo: undefined;
  ReportDetail: undefined;
  ResetPassword: undefined;
};
