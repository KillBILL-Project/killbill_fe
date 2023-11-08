import jwtDecode from 'jwt-decode';
import moment from 'moment';

type AccessToken = {
  azp: string;
  aud: string;
  sub: string;
  scope: string;
  exp: string;
  expiresIn: string;
  email: string;
  emailVerified: string;
  accessType: string;
};

export const isExpired = (token: string) => {
  const decodedToken: AccessToken = jwtDecode(token);
  const { expiresIn } = decodedToken;
  return moment().isSameOrAfter(expiresIn);
};
