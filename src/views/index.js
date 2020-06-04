import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Fulllayout from '../layouts/fulllayout';
import Login from './auth/login/';

const RestrictedRoute = ({ component: Component, currentUrl, authUser, ...rest }) => {
    // const isTokenValid = authUser && jwtDecode(authUser.auth_token).exp > Date.now / 1000;
    const isTokenValid = false;
    return (
        <Route
            {...rest}
            render={
                props => isTokenValid ?
                    (<Component {...props} />)
                    : (
                        <Redirect
                            from={currentUrl}
                            to="/login"
                        />
                    )}
        />
    )
}

class App extends Component {
    render() {
        let pathname = this.props.location.pathname;
        if (this.props.location.pathname === "/login") {
            pathname = "/"
        }
        return (
            <Switch>
                <RestrictedRoute
                    currentUrl={pathname}
                    authUser={"testUser"}
                    path="/"
                    component={Fulllayout}
                />
                <Route path="/login" exact component={Login} />
            </Switch>
        );
    }
}
const mapStateToProps = ({ router }) => {
    const { location } = router;
    return { location };
}
export default connect(mapStateToProps)(App)
