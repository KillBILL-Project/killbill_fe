import { useRecoilState, useSetRecoilState } from 'recoil';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { tokenState, userState } from '../states';
import { requestLogin, requestRegister } from '../services/api/authService';
import { LoginFormType, LoginResponse, RegisterType } from '../types/common';
import { HomeStackParamList } from '../types/navigation';
import { removeRefreshToken, saveRefreshToken } from '../services/storage/encryptedStorage';

interface UseAuthType {
  login: (params: LoginFormType) => Promise<void>;
  register: (params: RegisterType) => Promise<void>;
  setTokens: (params: LoginResponse) => Promise<void>;
  clearTokens: () => Promise<void>;
}

const useAuth = (): UseAuthType => {
  // TODO: 유저 정보 셋팅하기
  const [user, setUser] = useRecoilState(userState);
  const setAccessToken = useSetRecoilState(tokenState);

  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  const setTokens = async (params: LoginResponse) => {
    setAccessToken(params.accessToken);
    if (params.refreshToken) await saveRefreshToken(params.refreshToken);
  };

  const clearTokens = async () => {
    setAccessToken(null);
    await removeRefreshToken();
  };

  const login = async (params: LoginFormType) => {
    const response = await requestLogin<LoginResponse>(params);

    if (response.data.code === 404) {
      if (params.loginType !== 'EMAIL') {
        navigate('AuthDetail', {
          email: params.email,
          loginType: params.loginType!,
        });
      }
      return;
    }
    await setTokens(response.data.data!);
  };

  const register = async (params: RegisterType) => {
    const response = await requestRegister<LoginResponse>(params);
    await setTokens(response.data.data!);
  };

  return { login, register, setTokens, clearTokens };
};

export default useAuth;
