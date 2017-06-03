import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
// @TODO footer tabs

export default function Wrapper(props) {
  const { children, withNavigation } = props;
  const { height } = Dimensions.get('window');

  return (
    <View>
      <ScrollView overScrollMode="never">
        <View style={{minHeight: height}}>
          {children}
        </View>
      </ScrollView>
    </View>
  )
}
