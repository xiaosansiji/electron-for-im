import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import getRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
// import mobx from 'mobx';
import { Provider } from 'mobx-react';
// Import our Stores Here
import SessionStore from './stores/session';
// Because they're classes, we have to instantiate them here :)
const sessionStore = new SessionStore({});
const stores = {
  session: sessionStore,
};
axios.defaults.baseURL = 'https://m.bingbaba.com';
class App extends Component {
    render() {
      return (
        <Provider {...stores}>
            <HashRouter>
                {getRoutes()}
            </HashRouter>
        </Provider>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
