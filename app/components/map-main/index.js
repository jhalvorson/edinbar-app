import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { inject, observer } from 'mobx-react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from './styles';

@inject('bars', 'map')
@observer
export default class MapMain extends Component {
  componentDidMount() {
    this.props.bars.getBars();
  }

  render() {
    const { bars } = this.props.bars;
    const { region } = this.props.map;

    console.log(bars);

    return (
      <View style={styles.test}>
        <View style={styles.container}>
          {
            <MapView
              style={styles.map}
              region={region}
            >
              {bars.map(bar => (
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
      </View>
    )
  }
}
