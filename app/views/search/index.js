import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-native';
import axios from 'axios';
import Wrapper from '../../layouts/wrapper';

@inject('search')
@observer
export default class Search extends Component {
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
      <Wrapper>
        <Text style={{fontSize: 25, textAlign:'center', paddingTop: 40}}>Search</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => search.updateCurrentSearch({text})}
          value={search.currentSearch}
        />
        <TouchableOpacity onPress={() => this.searchResults()}>
          <Text>Search!</Text>
        </TouchableOpacity>
        {search.searchResults.length > 0 &&
          search.searchResults.map((result) => (
            <View key={result._id}>
              <Text>{result.name}</Text>
              <Link to={`/bar/${result.id}`}><Text>View bar</Text></Link>
            </View>
          ))
        }
      </Wrapper>
    );
  }
}
