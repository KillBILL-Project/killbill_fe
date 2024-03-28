import { useSetRecoilState } from 'recoil';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { tokenState, userState } from '../states';
import { removeRefreshToken, saveRefreshToken } from '../services/storage/encryptedStorage';
import { LoginResponse } from '../types/auth';
import { getUserInfo } from '../services/api/authService';

interface UseAuthType {
  setTokens: (params: LoginResponse) => Promise<void>;
  clearTokens: () => Promise<void>;
  getUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const useAuth = (): UseAuthType => {
  const setAccessToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);

  const setTokens = async (params: LoginResponse) => {
    setAccessToken(params.accessToken ?? null);
    if (params.refreshToken) await saveRefreshToken(params.refreshToken);
  };

  const clearTokens = async () => {
    setAccessToken(null);
    await removeRefreshToken();
  };

  const getUser = async () => {
    const response = await getUserInfo();
    const userInfo = response.data.data;
    if (!userInfo) {
      // TODO: 유저정보가 없을리 없지만 없다면 로그인화면으로 보내야하나?
    }
    setUser({ ...userInfo });
  };

  const logout = async () => {
    setUser(null);
    await clearTokens();
    if (await GoogleSignin.isSignedIn()) {
      await GoogleSignin.signOut();
    }
  };

  return { setTokens, clearTokens, getUser, logout };
};

export default useAuth;
