import { observable, action } from 'mobx';
import api from '../../api';
import axios from 'axios';

class Bars {
  @observable bars = [];
  @observable test = 'Hello';
  @observable activeBar = {};

  @action getBars = () => {
    api.getBarsAPI()
      .then((bars) => {
        this.bars.replace(bars)
      })
      .catch(err => err)
  }

  @action getActiveBar(id) {
    axios
      .get(`https://edinbar-backend-nspvkxgzrm.now.sh/api/v1/bars/${id}`)
      .then(res => {
        this.activeBar = res.data[0];
      })
      .catch(err => {
        this.error = err;
      });
  }
}

export default new Bars();
