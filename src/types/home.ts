import { SharedValue } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { RefObject } from 'react';
import { ratio } from '../utils/platform';

export interface CategoryScrollProps {
  trashSize: number;
  motionRef: RefObject<LottieView>;
}

export interface TrashCategoryProps {
  index: number;
  selectedIndex: SharedValue<number>;
  image: string;
  trashSize: number;
}

export const ITEM_SIZE = ratio * 88;
export const SELECT_ITEM_SIZE = ratio * 127;
export const FIRST_CIRCLE_SIZE = ratio * 119;
export const SECOND_CIRCLE_SIZE = ratio * 107;
export const THIRD_CIRCLE_SIZE = ratio * 95;
export const COMMON_CIRCLE_SIZE = ratio * 80;
