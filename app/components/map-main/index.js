import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import MapView from 'react-native-maps';
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
                <MapView.Marker
                  key={`marker-${bar._id}`}
                  coordinate={{latitude: bar.location.coordinates.lat, longitude: bar.location.coordinates.lng}}
                  title={bar.name}
                />
              ))}
            </MapView>
          }
        </View>
        <Text>Bars:</Text>
        {bars.map(bar => <Text key={bar._id}>{bar.name}</Text>)}
      </View>
    )
  }
}
