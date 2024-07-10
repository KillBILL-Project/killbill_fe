import { StyleSheet } from 'react-native';
import { scale } from '@utils/platform';

export const styles = StyleSheet.create({
  circle: {
    margin: scale(4),
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
