import { observable } from 'mobx';
import MapView from '../../views/map';
import Search from '../../views/search';
import Login from '../../views/login';
import Bar from '../../views/single-bar';

class Routes {
  @observable all = [
    {
      path: '/',
      view: MapView,
      authRequired: true,
    },
    {
      path: '/search',
      view: Search,
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
    },
    {
      path: '/bar/:id',
      view: Bar
    }
  ];
}

export default new Routes();
