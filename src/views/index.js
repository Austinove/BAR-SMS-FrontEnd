import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { history } from "../store";
import { connect } from "react-redux";
import { compose } from "redux";
import Fulllayout from '../layouts/fulllayout';
import Loader from "react-spinners/RingLoader";
const Login = withRouter(lazy(() => import("./auth/login/index")));
const tocken_check = true;
const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route 
    {...rest }
    render = {
        props =>
            (tocken_check) ?
            (
                <Component {...props} />
            ) :
            (
                <Redirect to='/login' />
            )
    }
    />
)
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
                            <PrivateRoute
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
