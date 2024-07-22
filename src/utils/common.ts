import _, { round, toString } from 'lodash';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '@constants/constants';
import { MutableRefObject } from 'react';

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

export const convertTimeFullDate = (date: string) => {
  return `${new Intl.DateTimeFormat('ko').format(new Date(date))} ${new Intl.DateTimeFormat(
    'en-GB',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    },
  ).format(new Date(date))}`; // '2023. 5. 16. 15: 00'
};

export const flat = <T>(array?: T[][]): T[] => {
  if (!array) return [];
  return Array.prototype.concat(...array);
};

export const calculatePercentage = (
  num1: number,
  num2: number,
  includePercentageSymbol?: boolean,
): string => {
  if (num2 === 0) return includePercentageSymbol ? '0' : '0%';

  const percentage = round((num1 / num2) * 100);
  return includePercentageSymbol ? `${percentage}` : `${percentage}%`;
};

export const checkDateChanged = (currentDate: MutableRefObject<string>, date: string) => {
  if (currentDate.current === date) return false;
  // eslint-disable-next-line no-param-reassign
  currentDate.current = date;
  return true;
};
