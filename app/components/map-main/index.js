import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { inject, observer } from 'mobx-react';
import MapView, { Marker, Callout } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Card from '../bar-carousel/card';
// import styles from './styles';
import styles from './styles';

@inject('bars', 'map')
@observer
export default class MapMain extends Component {
  constructor() {
    super();

    this.animateMap = this.animateMap.bind(this);
  }

  componentWillReact() {
    const { bars, map } = this.props;
    const { currentSlide, currentBar } = map;
    this.barCarousel.snapToItem(currentSlide);
  }

  componentDidMount() {
    this.props.bars.getBars();
  }

  animateMap(index, marker) {
    const { latitude, longitude } = this.map.props.children[this.props.map.currentSlide].props.coordinate;
    this.props.map.slideToItem(index, latitude, longitude);
    this.map.animateToCoordinate(this.map.props.children[this.props.map.currentSlide].props.coordinate);
  }

  render() {
    const { bars } = this.props.bars;
    const { region, slideToItem } = this.props.map;
    const currentSlide = this.props.map.currentSlide;

    const { width, height } = Dimensions.get('window');
    const sliderWidth = width;
    const itemWidth = sliderWidth - 60;
    const itemHeight = height - 400;

    console.log(this.map && this.map.props.children[currentSlide].props.coordinate);

    const settings = {
      sliderWidth,
      itemWidth,
      firstItem: currentSlide,
      inactiveSlideScale: 0.9,
      inactiveSlideOpacity: 0.8,
      onSnapToItem: (index, marker) => this.animateMap(index, marker),
      showsHorizontalScrollIndicator: false,
      swipeThreshold: 1,
      removeClippedSubviews: false,
    };

    const dynamicStyles = StyleSheet.create({
      slide: {
        width: itemWidth - 60,
        height: itemHeight,
      },
    });

    return (
      <View style={styles.test}>
        <View style={styles.container}>
          {
            <MapView
              ref={(ref) => { this.map = ref; }}
              style={styles.map}
              region={region}
            >
              {bars.map((bar, index) => (
                <Marker
                  key={`marker-${bar._id}`}
                  coordinate={{latitude: bar.location.coordinates.lat, longitude: bar.location.coordinates.lng}}
                >
                <Callout>
                  <Text>{bar.name}</Text>
                  <Link to={`/bar/${bar._id}`}>
                    <Text>Visit bar</Text>
                  </Link>
                </Callout>
              </Marker>
              ))}
            </MapView>
          }
        </View>
        <View style={styles.carouselWrapper}>
          <Carousel
            {...settings}
            ref={(barCarousel) => { this.barCarousel = barCarousel; }}
            >
            {bars.map((bar) => (
              <View style={[styles.slide, dynamicStyles.slide]} key={bar._id}>
                <Card bar={bar} />
              </View>
            ))}
          </Carousel>
        </View>
      </View>
    )
  }
}
