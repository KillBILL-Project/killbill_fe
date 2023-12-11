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
  // param type 이상
  emailLogin: (data: string) => Promise<void>;
  googleLogin: (data: string) => Promise<void>;
  userRegister: (data: string) => Promise<void>;
  setTokens: (data: LoginResponse) => Promise<void>;
  clearTokens: () => Promise<void>;
  inProgress: boolean;
}

/**
 * 여러 기능에 하나의 상태를 범할 수 있움
 * useAuth라는 훅에 email, google, register의 기능이 있고 setInProgress 라는 로컬 상태를 가지고 있음에 따라
 * 상태 관리에 있어 꼬이는 리스크가 우려됨
 * 모든 경우는 아니지만 최대한 단일책임원칙을 가져가면 좋음
 */

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

  /**
   * 로그인 관련 함수는 하나로 합쳐도 될거같움
   * api는 하나이기 때문에 분기는 필수이고 백엔드에서 분기치는게 효율적
   * 동일한 response, request type 설정
   */

  const emailLogin = async (data: string) => {
    const response = await login<LoginResponse>({ data, setInLoginProgress: setInProgress });

    // 404가 response.status로 올거같은데
    // 그러면 여기서 굳이 처리 안해도될거같고
    // 다른 곳도 동일
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
