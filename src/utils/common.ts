import _ from 'lodash';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../constants/constants';

export const isValidEmail = (email: string) => {
  return EMAIL_PATTERN.test(email);
};

export const isValidPassword = (password: string) => {
  return PASSWORD_PATTERN.test(password);
};

// 객체의 모든 요소를 비교, 하나의 요소라도 같다면 false.
export const isCompletelyDifferent = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any },
) => {
  return Object.keys(obj1).every(key => !_.isEqual(obj1[key], obj2[key]));
};
