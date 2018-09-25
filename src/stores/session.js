import { observable, computed, action, decorate } from 'mobx';

export default class SessionStore {
  isLogined = false;
  userInfo = {};

  get getLoginStatus() {
    if (this.userInfo) {
        return true;
    }
    return false;
  }

  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  login() {
    this.userInfo = { name: 'sunzhe' };
  }
}

decorate(SessionStore, {
  isLogined: observable,
  userInfo: observable,
  getLoginStatus: computed,
  login: action,
})