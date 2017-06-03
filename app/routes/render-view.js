import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import { inject, observer } from 'mobx-react';

@inject('routes')
@observer
export default class RenderView extends Component {
  render() {
    const { view: ViewComponent } = this.props;

    return <ViewComponent />
  }
}
