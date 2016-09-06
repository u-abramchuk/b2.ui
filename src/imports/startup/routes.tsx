import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ApplicationComponent from '../ui/app';
import LoginComponent from '../ui/login';

export default class RoutingComponent extends React.Component<{}, {}>  {
    requireAuth(nextState, replace) {
        if (!Meteor.user()) {
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
                <Route path="/" component={ApplicationComponent} 
                                onEnter={this.requireAuth.bind(this) } />
            </Router>
        );
    }
}