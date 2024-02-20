import { SocialRegisterParams } from './auth';
import { AlarmParams, AlarmType } from './notifications';

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
  ReportDetail: undefined;
  ResetPassword: undefined;
};
