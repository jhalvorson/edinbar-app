import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import Wrapper from '../../layouts/wrapper';
import Hero from '../../components/hero';

@inject('navigation', 'bars')
@observer
export default class Bar extends Component {

  componentDidReact() {
    const { activeBar } = this.props.bars;
    console.log(activeBar);
  }

  componentDidMount() {
    this.props.bars.getActiveBar(this.props.navigation.match.params.id);
  }

  render() {
    const { activeBar } = this.props.bars;
    console.log(activeBar);
    return (
      <Wrapper>
        <Hero title={activeBar.name} />
      </Wrapper>
    );
  }
}
