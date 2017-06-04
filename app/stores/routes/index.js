import { observable } from 'mobx';
import MapView from '../../views/map';
import Test from '../../views/test';
import Login from '../../views/login';

class Routes {
  @observable all = [
    {
      path: '/',
      view: MapView,
      authRequired: true,
    },
    {
      path: '/search',
      view: Test,
      authRequired: true,
    },
    {
      path: '/favourites',
      view: MapView,
      authRequired: true,
    },
    {
      path: '/profile',
      view: MapView,
      authRequired: true,
    },
    {
      path: '/login',
      view: Login
    }
  ];
}

export default new Routes();
