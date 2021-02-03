import {observable, computed, action, makeAutoObservable} from 'mobx';

class Store {
  @observable
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  @computed get getSize() {
    return this.data.length;
  }

  @action preloadData = () => {
    this.data = [1, 2, 3, 4, 5];
  };
}

export default new Store();
