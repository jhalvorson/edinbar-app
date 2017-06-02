import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Api from '../../api';
import styles from './styles';

// export default function Test({ text }) {
//   return (
//     <View style={styles.test}>
//       <Text>{text}</Text>
//     </View>
//   );
// }

export default class Test extends Component {
  componentDidMount() {
    Api.getBars();

    // fetch('http://localhost:7777/api/v1/bars').then(function(response) {
    //   return response.blob();
    // }).then(function(myBlob) {
    //   console.log(myBlob);
    // });

    // fetch("https://css-tricks.com/wp-json/wp/v2/posts")
    //  .then((response) => { return response.json() } )
    //  .catch((error) => console.warn("fetch error:", error))
    //  .then((response) => {
    //    console.log(response)
    //  })
  }

  render() {
    const { text } = this.props;
    return (
      <View style={styles.test}>
        <Text>{text}</Text>
      </View>
    );
  }
}
