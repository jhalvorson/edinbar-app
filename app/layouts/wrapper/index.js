import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import FooterTabs from '../../components/footer-tabs';
import styles from './styles';

export default function Wrapper(props) {
  const { children, withNavigation , title } = props;
  const { height } = Dimensions.get('window');

  return (
    <View style={styles.wrapper}>
      <ScrollView overScrollMode="never" scrollEnabled={true}>
        <View style={[styles.content, { minHeight: height - 80 }]}>
          {children}
        </View>
      </ScrollView>
      <FooterTabs />
      <View style={styles.footer}>
        <FooterTabs />
      </View>
    </View>
  )
}
