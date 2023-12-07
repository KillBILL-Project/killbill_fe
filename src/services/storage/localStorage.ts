import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (e) {
    // 저장 에러 처리
    console.error('토큰 저장 중 에러 발생', e);
  }
};

export const saveAccessToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
  } catch (e) {
    // 저장 에러 처리
    console.error('토큰 저장 중 에러 발생', e);
  }
};

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('accessToken');
  } catch (e) {
    // 저장 에러 처리
    console.error('토큰 가져오는 중 에러 발생', e);
    return '';
  }
};

export const getRefreshToken = async () => {
  try {
    return await AsyncStorage.getItem('refreshToken');
  } catch (e) {
    // 저장 에러 처리
    console.error('토큰 가져오는 중 에러 발생', e);
    return '';
  }
};

export const clearToken = async () => {
  try {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
  } catch (e) {
    // 저장 에러 처리
    console.error('토큰 비우는 중 에러 발생', e);
  }
};
