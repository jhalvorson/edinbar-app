import { observable, action } from 'mobx';

class Map {
  @observable region = {
    latitude: 55.9295143,
    longitude: -3.2137729,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
}

export default new Map();
