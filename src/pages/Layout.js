import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// import mobx from 'mobx';
import { Provider } from 'mobx-react';
// Import our Stores Here
import SessionStore from '../stores/session';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Layout.css';

// Enable MobX Strict Functionality
// mobx.useStrict(true);
// Because they're classes, we have to instantiate them here :)
const sessionStore = new SessionStore({});
const store = {
  session: sessionStore,
};

class Layout extends Component {
  render() {
    return (
      <Provider {...store}>
        <div>
          <Header />
          <div className="content">
            <Grid container spacing={8}>
              <Grid item xs={3}>
                <TextField
                  id="standard-search"
                  label="工号或姓名查询"
                  type="search"
                  margin="normal"
                />
                <Sidebar />
              </Grid>
              <Grid item xs={9}>
                <Paper>xs</Paper>
              </Grid>
            </Grid>
          </div>
        </div>
       </Provider>
    );
  }
}

export default Layout;
