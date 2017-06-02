import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import Api from '../../api';
import styles from './styles';

@inject('bars')
@observer
export default class Test extends Component {
  componentDidMount() {
    this.props.bars.getBars();
  }

  render() {
    const { text } = this.props;
    const { bars } = this.props.bars;

    console.log(bars);

    return (
      <View style={styles.test}>
        <Text>{text}</Text>
      </View>
    );
  }
}
