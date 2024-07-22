import { WHITE } from '@constants/colors';
import { scale } from '@utils/platform';
import { StyleSheet } from 'react-native';
import { ITEM_HEIGHT } from '@screens/home/AlarmSetting/constant';

export const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * 3,
    overflow: 'hidden',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: scale(40),
    fontWeight: 500,
    color: WHITE,
  },
});
