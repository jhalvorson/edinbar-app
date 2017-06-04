import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  test: {
    paddingTop: 0,
  },
  container: {
    height: height - 110,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
