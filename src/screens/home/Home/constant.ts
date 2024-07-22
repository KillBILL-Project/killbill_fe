import t1 from '@assets/image/motion/1.png';
import t2 from '@assets/image/motion/2.png';
import t3 from '@assets/image/motion/3.png';
import t4 from '@assets/image/motion/4.png';
import t5 from '@assets/image/motion/5.png';
import t6 from '@assets/image/motion/6.png';
import t7 from '@assets/image/motion/7.png';
import t8 from '@assets/image/motion/8.png';
import t9 from '@assets/image/motion/9.png';
import t10 from '@assets/image/motion/10.png';
import t11 from '@assets/image/motion/11.png';
import t12 from '@assets/image/motion/12.png';
import t13 from '@assets/image/motion/13.png';
import t14 from '@assets/image/motion/14.png';
import t15 from '@assets/image/motion/15.png';
import t16 from '@assets/image/motion/16.png';
import t17 from '@assets/image/motion/17.png';
import t18 from '@assets/image/motion/18.png';
import t19 from '@assets/image/motion/19.png';
import t20 from '@assets/image/motion/20.png';
import t21 from '@assets/image/motion/21.png';
import t22 from '@assets/image/motion/22.png';
import t23 from '@assets/image/motion/23.png';
import t24 from '@assets/image/motion/24.png';
import t25 from '@assets/image/motion/25.png';
import t26 from '@assets/image/motion/26.png';
import t27 from '@assets/image/motion/27.png';
import t28 from '@assets/image/motion/28.png';
import t29 from '@assets/image/motion/29.png';
import t30 from '@assets/image/motion/30.png';
import t31 from '@assets/image/motion/31.png';
import t32 from '@assets/image/motion/32.png';
import t33 from '@assets/image/motion/33.png';
import { ImageSourcePropType } from 'react-native';
import { scale } from '@utils/platform';
import { SharedValue } from 'react-native-reanimated';

export const motionArray: ImageSourcePropType[] = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
  t17,
  t18,
  t19,
  t20,
  t21,
  t22,
  t23,
  t24,
  t25,
  t26,
  t27,
  t28,
  t29,
  t30,
  t31,
  t32,
  t33,
];

export interface CategoryScrollProps {
  trashSize: number;
  playMotion: () => void;
}

export interface TrashCategoryProps {
  index: number;
  selectedIndex: SharedValue<number>;
  changeX: SharedValue<number>;
  image: ImageSourcePropType;
  trashSize: number;
}

export const ITEM_SIZE = scale(88);
export const SELECT_ITEM_SIZE = scale(127);
export const FIRST_CIRCLE_SIZE = scale(119);
export const SECOND_CIRCLE_SIZE = scale(107);
export const THIRD_CIRCLE_SIZE = scale(95);
export const COMMON_CIRCLE_SIZE = scale(80);
