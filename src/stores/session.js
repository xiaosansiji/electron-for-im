import { observable, computed, action } from 'mobx';

export default class SessionStore {
  @observable userInfo;

  @computed get getLoginStatus() {
    if (this.userInfo && this.userInfo.name) {
      return true;
    }
    return false;
  }

  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  @action('Sign in')
  signIn() {
    debugger
    this.userInfo = { name: 'sunzhe' };
    console.log('xxx')
  }
}