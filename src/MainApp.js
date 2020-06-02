import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// import indexRoutes from './routes/index.js';
import store, { history } from "./store";
import Fulllayout from './layouts/fulllayout.js';
import Login from './views/auth/login/index.js';

const MainApp = () => {
    const test = false;
    return (
        <Provider store = {store}>
            <ConnectedRouter history={history}>
                <Switch>
                    {!test ?
                    <Route path="/" component= {Fulllayout} />
                    :<Route path="/login" exact component={Login} />};
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}

export default MainApp;
