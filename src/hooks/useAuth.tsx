import { useRecoilState } from 'recoil';
import { Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { tokenAtom, userAtom } from '../states';
import { login, register } from '../services/api/authService';
import { LoginResponse, SsoRegisterParams } from '../types/common';
import { clearToken, saveAccessToken, saveTokens } from '../services/storage/localStorage';
import { RootStackParamList } from '../types/navigation';

interface UseAuthType {
  emailLogin: (data: string) => Promise<void>;
  googleLogin: (data: string) => Promise<void>;
  userRegister: (data: string) => Promise<void>;
  setTokens: (data: LoginResponse) => Promise<void>;
  clearTokens: () => Promise<void>;
  inProgress: boolean;
}

const useAuth = (): UseAuthType => {
  // TODO: 유저 정보 셋팅하기
  const [user, setUser] = useRecoilState(userAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [inProgress, setInProgress] = useState(false);

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const setTokens = async (data: LoginResponse) => {
    if (data.refreshToken) {
      await saveTokens(data.accessToken, data.refreshToken);
    } else {
      await saveAccessToken(data.accessToken);
    }

    setToken(data.accessToken);
  };

  const clearTokens = async () => {
    setToken(null);
    await clearToken();
  };

  const emailLogin = async (data: string) => {
    const response = await login<LoginResponse>({ data, setInLoginProgress: setInProgress });

    if (response.data.code === 200) {
      if (!response.data.data) return;
      await setTokens(response.data.data);
    } else if (response.data.code === 404) {
      Alert.alert(response.data.message);
    } else {
      Alert.alert(response.data.message);
    }
  };

  const googleLogin = async (data: string) => {
    const response = await login<LoginResponse>({ data, setInLoginProgress: setInProgress });

    if (response.data.code === 200) {
      if (!response.data.data) return;
      await setTokens(response.data.data);
    } else if (response.data.code === 404) {
      const loginForm = JSON.parse(data);
      const registerParams: SsoRegisterParams = {
        email: loginForm.email,
        loginType: loginForm.loginType,
      };
      navigate('AuthDetail', registerParams);
    } else {
    }
  };

  const userRegister = async (data: string) => {
    const response = await register<LoginResponse>({ data, setInRegisterProgress: setInProgress });

    if (response.data.code === 200) {
      if (!response.data.data) return;
      await setTokens(response.data.data);
    } else {
      Alert.alert(response.data.message);
    }
  };

  return { emailLogin, googleLogin, userRegister, setTokens, clearTokens, inProgress };
};

export default useAuth;
