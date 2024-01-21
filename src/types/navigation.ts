import { LoginType } from './common';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  AuthDetail: {
    email: string;
    loginType: LoginType | undefined;
  };
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
