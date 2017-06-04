import { observable } from 'mobx';
import MapView from '../../views/map';
import Search from '../../views/search';
import Login from '../../views/login';

class Routes {
  @observable all = [
    {
      path: '/',
      view: Search,
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
    }
  ];
}

export default new Routes();
