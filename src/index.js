import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import getRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
// import mobx from 'mobx';
import { Provider } from 'mobx-react';
// Import our Stores Here
import stores from './stores';
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
