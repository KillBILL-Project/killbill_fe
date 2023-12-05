import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../constants/constants';

export const isValidEmail = (email: string) => {
  return EMAIL_PATTERN.test(email);
};

export const isValidPassword = (password: string) => {
  return PASSWORD_PATTERN.test(password);
};
