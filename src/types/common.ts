export type Gender = 'M' | 'F' | undefined;

export interface ItemType {
  label: string;
  value: string;
}

export type LoginType = 'EMAIL' | 'GOOGLE' | 'APPLE';

export interface AuthDetailType {
  age: string;
  gender: Gender | undefined;
  country: ItemType | undefined;
}
