import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from './card';
import styles from './styles';

@inject('bars', 'map')
@observer
export default class BarCarousel extends Component {
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
    this.props.map.slideToItem(index);
    console.log(this.barCarousel);
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const currentSlide = this.props.map.currentSlide;
    const { slideToItem } = this.props.map;
    const sliderWidth = width;
    const itemWidth = sliderWidth - 60;
    const itemHeight = height - 400;

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

    const { bars } = this.props.bars;


    return (
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
    );
  }
}
