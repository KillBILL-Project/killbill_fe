import { LoginType } from './common';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AuthDetail: {
    email: string;
    loginType: LoginType | undefined;
  };
  ForgotPassword: undefined;
  ResetPassword: undefined;

  Home: undefined;
  Location: undefined;
  Report: undefined;
  MyPage: undefined;
};
