import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { inject, observer } from 'mobx-react';

@inject('search')
@observer
export default class SearchResults extends Component {
  componentDidReact() {
    const { search } = this.props;
    console.log(search);
  }
  render() {
    const { search } = this.props;
    return (
      <View>
        {search.searchResults.length > 0 &&
          search.searchResults.map((result) => (
            <View key={result._id}>
              <Text>{result.name}</Text>
              <Link to={`/bar/${result._id}`}><Text>View bar</Text></Link>
            </View>
          ))
        }
      </View>
    );
  }
}
