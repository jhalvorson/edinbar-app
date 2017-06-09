import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { inject, observer } from 'mobx-react';
import styles from './styles';

@inject('search')
@observer
export default class SearchField extends Component {
  constructor() {
    super();

    this.searchResults = this.searchResults.bind(this);
  }

  searchResults() {
    this.props.search.getResults(this.props.search.currentSearch);
  }

  render() {
    const { search } = this.props;
    return (
      <View style={styles.searchWrapper}>
        <Text style={{fontSize: 25, textAlign:'center', paddingTop: 40}}>Search</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => search.updateCurrentSearch({text})}
          value={search.currentSearch}
        />
        <TouchableOpacity onPress={() => this.searchResults()}>
          <Text>Search!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
