import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  test: {
    paddingTop: 0,
  },
  container: {
    height,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
