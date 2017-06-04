import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer
export default class Login extends Component {

  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  login() {
    this.props.user.login();
    console.log(this.props.user);
  }

  render() {
    const { user } = this.props;

    console.log(user);

    return (
      <View>
          <Text style={{paddingTop: 50, fontSize: 25, textAlign: 'center'}}>Login screen</Text>

          <TouchableHighlight onPress={() => this.login()}>
            <Text>Login now</Text>
          </TouchableHighlight>

          {user.isLoggedIn ? <Text>Logged in</Text> : null}
      </View>
    )
  }
}
