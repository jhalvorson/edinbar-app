import { action, observable } from 'mobx';
import axios from 'axios';
import api from '../../api';

class Search {
  @observable currentSearch = '';
  @observable searchResults = [];
  @observable searchStatus = false;
  @observable error = '';

  @action updateCurrentSearch(item) {
    this.currentSearch = item;
  }

  @action getResults() {
    axios
      .get(`https://edinbar-dashboard.halvorson.co.uk/api/v1/search?q=${this.currentSearch.text}`)
      .then(res => {
        this.searchStatus = !this.searchStatus;
        this.searchResults.replace(res.data);
      })
      .catch(err => {
        this.error = err;
      });
  }
}

export default new Search();
