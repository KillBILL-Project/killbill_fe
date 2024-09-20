import { StyleSheet } from 'react-native';
import { BLACK } from '@constants/colors';
import { SELECTED_CIRCLE_SIZE } from '@screens/home/Home/constant';

export const styles = StyleSheet.create({
  // 부모 원의 크기를 따라가지만, 선택된 원의 경우 가장 안쪽의 원의 크기에 맞도록 max 지정 ( 0.8 => 90% + 89% )
  virtualCircle: {
    width: '100%',
    height: '100%',
    maxWidth: SELECTED_CIRCLE_SIZE * 0.8,
    maxHeight: SELECTED_CIRCLE_SIZE * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fixedCategoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  animatedCategoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  categoryTextView: {
    position: 'absolute',
    bottom: 5,
  },

  categoryText: {
    fontWeight: '700',
  },

  outerCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleCircle: {
    width: '90%',
    height: '90%',
    backgroundColor: '#00000070',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    width: '89%',
    height: '89%',
    backgroundColor: BLACK,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eachItemCircle: {
    backgroundColor: '#f3f3f3',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
