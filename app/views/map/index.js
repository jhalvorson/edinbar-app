import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import Wrapper from '../../layouts/wrapper';
import MapMain from '../../components/map-main';

@inject('bars')
@observer
export default class MapView extends Component {
  render() {
    return (
      <Wrapper>
        <MapMain />
      </Wrapper>
    );
  }
}
