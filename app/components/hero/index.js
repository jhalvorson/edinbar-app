import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

export default function Hero({ title} ) {
  return (
    <View style={styles.hero}>
      <Text style={styles.heroText}>{title}</Text>
    </View>
  );
}
