import { ItemType } from '../types/common';
import { ratio } from '../utils/platform';

export const INPUT_MARGIN = ratio * 24;
export const INPUT_TITLE_MARGIN = ratio * 6;
export const INPUT_WIDTH = ratio * 327;
export const TOAST_WIDTH = ratio * 327;
export const AUTH_HEIGHT = ratio * 48;
export const AUTH_BORDER_RADIUS = ratio * 10;
export const TAB_HEIGHT = ratio * 60;
export const HEADER_HEIGHT = ratio * 48;

export const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const PASSWORD_PATTERN =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]{8,})$/;
export const EXCLUDED_NUMERIC_PATTERN = /\D/g;

// 추가 예정
export const ERROR_CODE = {};

export const COUNTRIES: ItemType[] = [
  { label: 'Korea', value: 'korea' },
  { label: 'Japan', value: 'japan' },
  { label: 'China', value: 'china' },
];
