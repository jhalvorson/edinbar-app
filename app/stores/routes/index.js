import { observable } from 'mobx';
import MapView from '../../views/map';
import Test from '../../views/test';

class Routes {
  @observable all = [
    {
      path: '/',
      view: MapView,
    },
    {
      path: '/search',
      view: Test,
    },
    {
      path: '/favourites',
      view: MapView,
    },
    {
      path: '/profile',
      view: MapView,
    }
  ];
}

export default new Routes();
