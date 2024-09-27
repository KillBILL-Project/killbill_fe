import AsyncStorage from '@react-native-async-storage/async-storage';

export const getHomeGuideShown = async () => {
  return AsyncStorage.getItem('homeGuideShown');
};

export const setHomeGuideShown = async () => {
  return AsyncStorage.setItem('homeGuideShown', 'true');
};
