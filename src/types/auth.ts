import { Gender, LoginType } from './common';

export interface AuthDetailType {
  age: string;
  gender: Gender | undefined;
  country: string;
}

export interface LoginResponse {
  accessToken?: string;
  refreshToken?: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password?: string;
  loginType: LoginType;
  authCode?: string;
}

export interface RegisterRequest extends AuthDetailType {
  email: string;
  password?: string;
  loginType: LoginType;
  socialToken?: string;
}

export interface RegisterForm {
  email: string;
  password?: string;
  confirmedPassword?: string;
}

export interface SocialRegisterParams {
  email: string;
  loginType: LoginType;
  authCode: string;
}

export interface User {
  email: string;
  loginType: LoginType;
  country: string;
  pushConsent: boolean;
}
