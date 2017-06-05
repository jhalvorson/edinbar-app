import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { inject, observer } from 'mobx-react';
import styles from './styles';

@inject('navigation')
@observer
export default class FooterTabs extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.footer}>
        {navigation.tabs.map((tab) => {
          return (
            <View style={styles.tab} key={tab.to}>
              <Link to={tab.to}>
                <Text>{tab.text}</Text>
              </Link>
            </View>
          )
        })}
      </View>
    );
  }
}
