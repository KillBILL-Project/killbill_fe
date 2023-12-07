import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  try {
    // 토큰의 경우 암호화로 저장시켜주는 EncryptedStorage를 선호해서 사용
    // accessToken 토큰의 경우 굳이 디바이스에 저장할 필요 없다고 생각.
    // 이건 좀 의견이 갈리기는 하는데
    // session 방식처럼 유저를 차단하는 기능이 없어서
    // JWT에서 사용자 관리에 있어 BlackList를 구현을 하면서 방안을 내세움
    // 이에 있어 개인적인 생각은 효율적이지 않다는 생각 => 결국 black list를 관리하기 위해서
    // accessToken을 레디스나 다른 스토리지에 서버에서 상태를 관리해야함 => jwt에 어긋남
    // accessToken을 트래킹하기 위해서는 결국 모든 유저의 accessToken을 저장해야함 => 이럴거면 session 사용
    // jwt를 쓴다는거 자체가 보안에서 유하게 가겠다라는 의미
    // 보안에 대해 조금이나마 신경을 쓰기 위해서는 accessToken을 디바이스에 저장 안하면서, 만료 시간은 5분 10분 단위로 줄임.
    // 결론은 accessToken을 디바이스 스토리지가 아닌 atom에 저장을 하여 휘발성으로 처리 및 지속적 재발급
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
