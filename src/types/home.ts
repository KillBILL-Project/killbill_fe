import { SharedValue } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { RefObject } from 'react';
import { ratio, scale } from '../utils/platform';
import { round } from 'lodash';

export interface CategoryScrollProps {
  trashSize: number;
  motionRef: RefObject<LottieView>;
}

export interface TrashCategoryProps {
  index: number;
  selectedIndex: SharedValue<number>;
  changeX: SharedValue<number>;
  image: string;
  trashSize: number;
}

export const ITEM_SIZE = scale(88);
export const SELECT_ITEM_SIZE = scale(127);
export const FIRST_CIRCLE_SIZE = scale(119);
export const SECOND_CIRCLE_SIZE = scale(107);
export const THIRD_CIRCLE_SIZE = scale(95);
export const COMMON_CIRCLE_SIZE = scale(80);
