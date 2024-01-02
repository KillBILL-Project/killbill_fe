import EncryptedStorage from 'react-native-encrypted-storage';

export async function saveRefreshToken(value: string) {
  try {
    await EncryptedStorage.setItem('refreshToken', value);
  } catch (error) {
    console.log(error);
  }
}

export async function loadRefreshToken(): Promise<string | null> {
  try {
    return await EncryptedStorage.getItem('refreshToken');
  } catch (error) {
    return null;
  }
}

export async function removeRefreshToken(): Promise<void> {
  try {
    await EncryptedStorage.removeItem('refreshToken');
  } catch (error) {
    console.log(error);
  }
}
