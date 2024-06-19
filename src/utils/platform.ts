import { Dimensions, Platform } from 'react-native';
import { round } from 'lodash';

export const isIOS = Platform.OS === 'ios';
export const { width, height: windowHeight } = Dimensions.get('window');
export const isWideWidth = width > 600;
export const ratioWidth = isWideWidth ? (width * 3) / 5 : width;
export const ratio = ratioWidth / 375;

export const scale = (value: number) => round(ratio * value, 2);
export const ratioPx = (value: number) => `${scale(value)}px`;
export const px = (value: number) => `${value}px`;
