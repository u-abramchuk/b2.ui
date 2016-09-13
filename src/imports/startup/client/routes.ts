import { RouteConfig } from 'react-router';
import Application from '../../ui/Application';
import Login from '../../ui/Login';
import NewWorkspaceForm from '../../ui/NewWorkspaceForm';

const routes: Array<RouteConfig> = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Application,
        onEnter: (nextState, replace) => {
            if (!Meteor.userId()) {
                replace({
                    pathname: '/login',
                    state: {
                        nextPathName: nextState.location.pathname
                    }
                });
            }
        },
        childRoutes: [
            {
                path: '/workspaces/new',
                component: NewWorkspaceForm
            }
        ]
    }
];

export default routes;