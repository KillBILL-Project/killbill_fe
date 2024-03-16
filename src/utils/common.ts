import _, { toString } from 'lodash';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../constants/constants';

export const isValidEmail = (email: string) => {
  return EMAIL_PATTERN.test(email);
};

export const isValidPassword = (password?: string) => {
  return password ? PASSWORD_PATTERN.test(password) : false;
};

// 객체의 모든 요소를 비교, 모든 요소가 다르면 true (하나의 요소라도 같다면 false).
export const isCompletelyDifferent = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any },
) => {
  return Object.keys(obj1).every(key => !_.isEqual(obj1[key], obj2[key]));
};

export const sleep = (milliSeconds: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliSeconds);
  });
};

export const getDayOfWeek = (day: number) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[day];
};

export const getDayOfWeek2 = (date: number) => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  return days[date];
};

export const objectToQueryParam = <T extends object>(params: T) => {
  const queryParams = new URLSearchParams();

  Object.keys(params).forEach(key => {
    const value = params[key as keyof T];
    queryParams.append(key, String(value));
  });

  return toString(queryParams);
};
