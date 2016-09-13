import * as React from 'react';
import { IRouterContext, browserHistory } from 'react-router';

import MeteorComponent from './common/meteorComponent';
import BlazeTemplateComponent from './common/blazeTemplate';

interface LogoutData {
    isAuthenticated: boolean;
}

export default class LogoutComponent extends MeteorComponent<{}, {}, LogoutData> {
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
            <BlazeTemplateComponent template={template.loginButtons} />
        );
    }
}