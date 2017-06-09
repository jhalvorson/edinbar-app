import React from 'react';
import { View, Text } from 'react-native';
import { string, shape } from 'prop-types';
import styles from '../styles';

export default function Card({ bar }) {
  return (
    <View style={styles.card}>
      <Text>{bar.name}</Text>
    </View>
  );
}
