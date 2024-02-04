import { useSetRecoilState } from 'recoil';
import { tokenState } from '../states';
import { removeRefreshToken, saveRefreshToken } from '../services/storage/encryptedStorage';
import { LoginResponse } from '../types/auth';

interface UseAuthType {
  setTokens: (params: LoginResponse) => Promise<void>;
  clearTokens: () => Promise<void>;
}

const useAuth = (): UseAuthType => {
  const setAccessToken = useSetRecoilState(tokenState);

  const setTokens = async (params: LoginResponse) => {
    setAccessToken(params.accessToken ?? null);
    if (params.refreshToken) await saveRefreshToken(params.refreshToken);
  };

  const clearTokens = async () => {
    setAccessToken(null);
    await removeRefreshToken();
  };

  return { setTokens, clearTokens };
};

export default useAuth;
