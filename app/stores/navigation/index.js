import { observable, action } from 'mobx';

class Navigation {
  @observable activeTab = "/";
  @observable tabs = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/search',
      text: 'Search',
    },
    {
      to: '/favourite',
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
  };

  @action updateHistory = (history) => {
    this.history = history;
  }

  @action setActiveTab = (activeTab) => {
    this.activeTab = activeTab;
  }
}

export default new Navigation();
