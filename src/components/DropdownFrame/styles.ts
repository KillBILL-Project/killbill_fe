import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backdrop: { height: '100%', width: '100%', opacity: 100 },
  layoutContainer: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 100,
  },
  container: { overflow: 'hidden' },
  body: {
    flex: 1,
    width: '100%',
  },
});
