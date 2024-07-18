import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  buttonTitle: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectBox: {
    borderRadius: 5,
  },
  item: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventCapturingView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  buttonTitleTextWrapper: { justifyContent: 'center', alignItems: 'center' },
});
