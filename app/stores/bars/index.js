import { observable, action } from 'mobx';
import api from '../../api';

class Bars {
  @observable bars = [];

  @action getBars = () => {
    api.getBarsAPI()
      .then((bars) => {
        this.bars.replace(bars)
      })
      .catch(err => err)
  }
}

export default new Bars();
