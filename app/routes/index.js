import React, { Component } from 'react';
import { NativeRouter, nativeHistory } from 'react-router-native';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Scene from './scene';

@inject('routes')
@observer
export default class Routes extends Component {
  render() {
    const { routes } = this.props;
    return (
      <NativeRouter history={nativeHistory}>
        <View>
          {routes.all.map(route => <Scene key={route.path} {...route} />)}
        </View>
      </NativeRouter>
    );
  }
}
