import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SearchField from '../../components/search-field';
import SearchResults from '../../components/search-results';
import Wrapper from '../../layouts/wrapper';

export default function Search() {
  return (
    <Wrapper>
      <SearchField />
      <SearchResults />
    </Wrapper>
  );
}
