import { observable, action } from 'mobx';
import api from '../../api';

class User {
  @observable isLoggedIn = true;

  @action login() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

export default new User();
