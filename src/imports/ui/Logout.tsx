import * as React from 'react';
import { IRouterContext } from 'react-router';

import MeteorComponent from './common/MeteorComponent';
import BlazeTemplate from './common/BlazeTemplate';

interface LogoutData {
    isAuthenticated: boolean;
}

export default class Logout extends MeteorComponent<{}, {}, LogoutData> {
    context: IRouterContext;

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }

    getMeteorData() {
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    }

    componentDidUpdate() {
        if (!this.data.isAuthenticated) {
            this.context.router.push('/login');
        }
    }

    render() {
        var template = window['Template'];

        return (
            <BlazeTemplate template={template.loginButtons} />
        );
    }
}