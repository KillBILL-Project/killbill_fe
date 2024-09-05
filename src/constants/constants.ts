import { StyleSheet } from 'react-native';
import moment from 'moment/moment';
import { scale } from '@utils/platform';
import { ItemType } from '@type/common';

export const INPUT_MARGIN = scale(24);
export const INPUT_TITLE_MARGIN = scale(6);
export const INPUT_WIDTH = scale(327);
export const TOAST_WIDTH = scale(327);
export const AUTH_HEIGHT = scale(48);
export const AUTH_BORDER_RADIUS = scale(10);
export const HEADER_HEIGHT = scale(48);

export const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const PASSWORD_PATTERN =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]{8,})$/;
export const EXCLUDED_NUMERIC_PATTERN = /\D/g;

export const weekly = Array.from({ length: 7 }, (_, i) => ({
  value: (i + 1) % 7,
  text: moment()
    .day((i + 1) % 7)
    .format('dd'),
}));

// 추가 예정
export const ERROR_CODE = {};

export const COUNTRIES: ItemType[] = [
  { label: 'Korea', value: 'korea' },
  { label: 'Japan', value: 'japan' },
  { label: 'China', value: 'china' },
];

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
});
