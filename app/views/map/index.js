import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import MapMain from '../../components/map-main';

@inject('bars')
@observer
export default class MapView extends Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <MapMain />
      </View>
    );
  }
}
