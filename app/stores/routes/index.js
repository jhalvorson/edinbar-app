import { observable } from 'mobx';
import MapView from '../../views/map';

class Routes {
  @observable all = [
    {
      path: '/',
      view: MapView,
    }
  ];
}

export default new Routes();
