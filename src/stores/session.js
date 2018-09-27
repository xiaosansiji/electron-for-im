import { observable, computed, action } from 'mobx';

 class Session {
  @observable userInfo;

  @computed get getLoginStatus() {
    if (self.userInfo && self.userInfo.name) {
      return true;
    }
    return false;
  }

  @action('Sign in')
  signIn() {
    self.userInfo = { name: 'sunzhe' };
  }

  @action('Sign out')
  signOut() {
    self.userInfo = {};
  }
}
const self = new Session();
export default self;