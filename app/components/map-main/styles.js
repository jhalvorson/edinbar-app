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
  carousel: {
    zIndex: 10,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flex: 1,
  },
  carouselWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  slide: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 300,
  },
});
