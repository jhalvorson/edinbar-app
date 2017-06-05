import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import { inject, observer } from 'mobx-react';

@inject('navigation', 'user')
@observer
export default class RenderView extends Component {
  componentWillMount() {
    const { history, navigation, match } = this.props;
    navigation.updateHistory(history);
    navigation.updateMatch(match);
  }

  componentDidMount() {
    const { setActiveTab, history } = this.props.navigation;
    const { pathname } = history.location;

    setActiveTab(pathname);
  }

  render() {
    const { view: ViewComponent, user, authRequired } = this.props;

    if( authRequired && !user.isLoggedIn) {
      return <Redirect to={{pathname: '/login'}} />;
    }

    return <ViewComponent />;
  }
}

RenderView.defaultProps = {
  authRequired: false,
};
