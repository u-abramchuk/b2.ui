import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Application from '../../ui/Application';
import Login from '../../ui/Login';
import NewWorkspaceForm from '../../ui/NewWorkspaceForm';

export default class Routing extends React.Component<{}, {}>  {
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
                <Route path="/login" component={Login} />
                <Route path="/" component={Application}
                    onEnter={this.requireAuth.bind(this) }>
                    <Route path="workspaces/new" component={NewWorkspaceForm} />
                </Route>
            </Router>
        );
    }
}