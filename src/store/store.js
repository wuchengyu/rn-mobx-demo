import {observable, computed, action, makeAutoObservable} from 'mobx';

class Store {
  @observable
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @computed get getCount() {
    return this.count;
  }

  @action incCount = () => {
    this.count += 1;
  };
}

export default new Store();
