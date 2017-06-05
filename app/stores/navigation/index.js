import { observable, action } from 'mobx';

class Navigation {
  @observable activeTab = "/";
  @observable tabs = [
    {
      to: '/',
      text: 'Map',
    },
    {
      to: '/search',
      text: 'Search',
    },
    {
      to: '/favourites',
      text: 'Fav',
    },
    {
      to: '/profile',
      text: 'Profile',
    },
  ];

  @observable history = {
    goBack: '',
    push: '',
    location: {},
  };

  @observable match = {};

  @action updateHistory = (history) => {
    this.history = history;
  }

  @action updateMatch = (match) => {
    this.match = match;
  }

  @action setActiveTab = (activeTab) => {
    this.activeTab = activeTab;
  }
}

export default new Navigation();
