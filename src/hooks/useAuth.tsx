import { useRecoilState, useSetRecoilState } from 'recoil';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { tokenState, userState } from '../states';
import { requestRegister } from '../services/api/authService';
import { LoginResponse, RegisterType } from '../types/common';
import { AuthStackParamList } from '../types/navigation';
import { removeRefreshToken, saveRefreshToken } from '../services/storage/encryptedStorage';

interface UseAuthType {
  register: (params: RegisterType) => Promise<void>;
  setTokens: (params: LoginResponse) => Promise<void>;
  clearTokens: () => Promise<void>;
}

const useAuth = (): UseAuthType => {
  // TODO: 유저 정보 셋팅하기
  const [user, setUser] = useRecoilState(userState);
  const setAccessToken = useSetRecoilState(tokenState);

  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

  const setTokens = async (params: LoginResponse) => {
    setAccessToken(params.accessToken ?? null);
    if (params.refreshToken) await saveRefreshToken(params.refreshToken);
  };

  const clearTokens = async () => {
    setAccessToken(null);
    await removeRefreshToken();
  };

  const register = async (params: RegisterType) => {
    const response = await requestRegister<LoginResponse>(params);
    await setTokens(response.data.data!);
  };

  return { register, setTokens, clearTokens };
};

export default useAuth;
