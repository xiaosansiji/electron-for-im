import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Login from './Login';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Layout extends Component {
  render() {
    const {
      isLogined,
      signIn,
    } = this.props;
    if (!isLogined) {
      return (<Login signIn={signIn} />);
    }
    return (
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
    );
  }
}

export default inject(({ session }) => ({
  isLogined: session.getLoginStatus,
  userInfo: session.userInfo,
  signIn: session.signIn,
}))(observer(Layout));
