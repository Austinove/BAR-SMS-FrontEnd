import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { history } from "../store";
import { connect } from "react-redux";
import { compose } from "redux";
import Fulllayout from '../layouts/fulllayout';
import Loader from "react-spinners/RingLoader";
import { Container } from "reactstrap";
const Login = withRouter(lazy(() => import("./auth/login/index")));

const RestrictedRoute = ({ component: Component, currentUrl, authUser, ...rest }) => {
    // const isTokenValid = authUser && jwtDecode(authUser.auth_token).exp > Date.now / 1000;
    const isTokenValid = false;
    return (
        <Route
            {...rest}
            render={
                props => isTokenValid ?
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
                                authUser={"user"}
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
