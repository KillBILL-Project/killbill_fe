import { ParamListBase } from '@react-navigation/native';

export type Gender = 'M' | 'F' | undefined;

export interface ItemType {
  label: string;
  value: string;
}

export type LoginType = 'EMAIL' | 'GOOGLE' | 'APPLE';

export interface SsoRegisterParams {
  email: string;
  loginType: LoginType;
}

export interface RegisterFormType {
  email: string;
  password?: string;
  confirmedPassword?: string;
  loginType: LoginType | undefined;
}

export interface AuthDetailType {
  age: string;
  gender: Gender | undefined;
  country: string;
}

export interface RegisterType extends RegisterFormType, AuthDetailType {}

export interface WwoossResponse<T> {
  code: number;
  title: string;
  message: string;
  data?: T;
  customServerLog?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginFormType {
  email: string;
  password: string;
  loginType: LoginType | undefined;
  authCode: string | null;
}

export interface PopupProps {
  text: string | string[];
  confirmText?: string;
  onPressConfirm?: () => void;
  onPressCancel?: () => void;
}

export interface ToastProps {
  message: string | string[];
  isFailed?: boolean;
}

export interface MenuType<T extends ParamListBase> {
  name: string;
  route: keyof T;
}
