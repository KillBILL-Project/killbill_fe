import { ParamListBase } from '@react-navigation/native';

export type Gender = 'M' | 'F' | undefined;
export type LoginType = 'EMAIL' | 'GOOGLE' | 'APPLE';

export interface WwoossResponse<T> {
  code: number;
  title: string;
  message: string;
  data: T;
  customServerLog?: string;
}

export interface ItemType {
  label: string;
  value: string;
}

export interface MenuType<T extends ParamListBase> {
  name: string;
  route: keyof T;
  loginType?: LoginType[];
}
