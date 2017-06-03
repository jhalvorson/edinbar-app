import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  test: {
    paddingTop: 30,
  },
  container: {
    height: 400,
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
