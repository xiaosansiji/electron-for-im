import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import { Layout } from './pages';

const Main = withRouter(props => <Layout {...props} />);

export default () => {
    return (
        <Main>
            <Switch>
                <Route exact path="/" component={Layout} />
            </Switch>
        </Main>
    );
};
