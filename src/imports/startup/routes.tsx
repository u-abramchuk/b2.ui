import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApplicationComponent from '../ui/app';
import LoginComponent from '../ui/login';
import LogoutComponent from '../ui/logout';

export default class RoutingComponent extends React.Component<{}, {}>  {
    requireAuth(nextState, replace) {
        if (!Meteor.userId()) {
            replace({
                pathname: '/login',
                state: {
                    nextPathName: nextState.location.pathname
                }
            });
        }
    }

    render() {
        return (
            <Router history={browserHistory} >
                <Route path="/login" component={LoginComponent} />
                <Route path="/logout" component={LogoutComponent} />
                <Route path="/" component={ApplicationComponent}
                    onEnter={this.requireAuth.bind(this) } />
            </Router>
        );
    }
}