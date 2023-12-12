import { LoginType } from './common';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AuthDetail: {
    email: string;
    loginType: LoginType | undefined;
  };
  ForgotPassword: undefined;
  ResetPassword: undefined;
};
