import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Test({ text }) {
  return (
    <View style={styles.test}>
      <Text>{text}</Text>
    </View>
  );
}
