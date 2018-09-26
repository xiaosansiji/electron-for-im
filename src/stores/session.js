import { observable, computed, action, decorate } from 'mobx';

class SessionStore {
  isLogined = false;
  userInfo = {};

  get getLoginStatus() {
    if (this.userInfo && this.userInfo.name) {
      return true;
    }
    return false;
  }

  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  signIn() {
    debugger
    this.userInfo = { name: 'sunzhe' };
    console.log('xxx')
  }
}

export default decorate(SessionStore, {
  isLogined: observable,
  userInfo: observable,
  getLoginStatus: computed,
  signIn: action,
})