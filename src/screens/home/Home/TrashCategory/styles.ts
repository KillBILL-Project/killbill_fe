import { StyleSheet } from 'react-native';
import { scale } from '@utils/platform';

export const styles = StyleSheet.create({
  circle: {
    margin: scale(4),
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  animatedImage: {
    shadowColor: '#666',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
  },
});
