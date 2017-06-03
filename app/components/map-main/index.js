import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from './styles';

@inject('bars')
@observer
export default class MapMain extends Component {
  componentDidMount() {
    this.props.bars.getBars();
  }

  render() {
    const { bars } = this.props.bars;
    return (
      <View style={styles.test}>
        <Text>Bars:</Text>
        {bars.map(bar => <Text key={bar._id}>{bar.name}</Text>)}
      </View>
    )
  }
}
