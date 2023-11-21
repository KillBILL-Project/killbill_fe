import { ItemType } from '../types/common';

export const INPUT_MARGIN = '20px';
export const INPUT_BORDER_WIDTH = '1px';
export const AUTH_HEIGHT = '50px';
export const AUTH_BORDER_RADIUS = '5px';

export const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const PASSWORD_PATTERN =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]{8,})$/;
export const EXCLUDED_NUMERIC_PATTERN = /[^0-9]/g;

// 추가 예정
export const ERROR_CODE = {};

export const COUNTRIES: ItemType[] = [
  { label: 'Korea', value: 'korea' },
  { label: 'Japan', value: 'japan' },
  { label: 'China', value: 'china' },
];
