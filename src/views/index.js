import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import { history } from "../store";
import { connect } from "react-redux";
import { compose } from "redux";
import Fulllayout from '../layouts/fulllayout';
import Loader from "react-spinners/RingLoader";
const Login = withRouter(lazy(() => import("./auth/login/index")));

const RestrictedRoute = ({ component: Component, currentUrl, authUser, ...rest }) => {
    const isTokenValid = authUser => {
        return Object.prototype.hasOwnProperty.call(authUser, "token")
    }
    //   authUser &&
    //   jwtDecode(authUser.token, "s_sBarsmsSecret").exp > Date.now / 1000;
    // const isTokenValid = false;
    console.log(localStorage.getItem("sys_user"));
    return (
        <Route
            {...rest}
            render={
                props => isTokenValid(authUser) ?
                    (<Component exact {...props} />)
                    : (
                        currentUrl === "/login" ? null : (
                            <Redirect
                                to={{ pathname: "/login", state: { from: currentUrl } }}
                            />)
                    )}
        />
    )
}
class App extends Component {
    render() {
        return (

            <Suspense
                fallback={
                    <div className="full-loader">
                        <Loader />
                    </div>
                }
            >
                <Switch>
                    <Router history={history} >
                        <div>
                            <RestrictedRoute
                                currentUrl={history.location.pathname}
                                authUser={localStorage.getItem("sys_user")}
                                path="/"
                                component={Fulllayout}
                            />
                            <Route exact path="/login" component={Login} />
                        </div>
                    </Router>
                </Switch>
            </Suspense>
        );
    }
}
const mapStateToProps = ({ router }) => {
    const { location } = router;
    return { location };
}
export default compose(withRouter, connect(mapStateToProps))(App)
