import { useSetRecoilState } from 'recoil';
import { removeRefreshToken, saveRefreshToken } from '@services/storage/encryptedStorage';
import { LoginResponse } from '@type/auth';
import { getUserInfo } from '@services/api/authService';
import { tokenState, userState } from '@states/auth';

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

  const logout = async () => {
    setUser(null);
    await clearTokens();
  };

  const getUser = async () => {
    const response = await getUserInfo();
    const userInfo = response.data.data;

    setUser({ ...userInfo });
  };

  return { setTokens, clearTokens, getUser, logout };
};

export default useAuth;
