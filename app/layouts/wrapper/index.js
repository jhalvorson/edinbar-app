import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import FooterTabs from '../../components/footer-tabs';
import styles from './styles';

export default function Wrapper(props) {
  const { children, disableScroll, withNavigation , title } = props;
  const { height } = Dimensions.get('window');

  return (
    <View style={styles.wrapper}>
      <ScrollView overScrollMode="never" scrollEnabled={!disableScroll}>
        <View style={[styles.content, { height }]}>
          {children}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <FooterTabs />
      </View>
    </View>
  )
}

Wrapper.defaultProps = {
  disableScroll: false,
}
