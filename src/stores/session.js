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
  signIn(data) {
    self.userInfo = data;
  }

  @action('Sign out')
  signOut() {
    self.userInfo = {};
  }
}
const self = new Session();
export default self;