import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import { inject, observer } from 'mobx-react';

@inject('navigation')
@observer
export default class RenderView extends Component {
  componentWillMount() {
    const { history, navigation } = this.props;
    navigation.updateHistory(history);
  }

  componentDidMount() {
    const { setActiveTab, history } = this.props.navigation;
    const { pathName } = history.location;
  }

  render() {
    const { view: ViewComponent } = this.props;

    return <ViewComponent />;
  }
}
