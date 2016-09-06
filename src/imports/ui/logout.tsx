import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { IRouterContext, browserHistory } from 'react-router';

import BlazeTemplateComponent from './blazeTemplate';

interface LogoutData {
    isAuthenticated: boolean;
}

@reactMixin.decorate(ReactMeteorData)
export default class LogoutComponent extends React.Component<{}, {}> {
    context: IRouterContext;
    data: LogoutData;

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }

    getMeteorData() {
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    }

    ensureNotAuthenticated() {
        if (!this.data.isAuthenticated) {
            this.context.router.push('/login');
        }
    }

    componentWillMount() {
        this.ensureNotAuthenticated();
    }

    componentDidUpdate() {
        this.ensureNotAuthenticated();
    }

    render() {
        var template = window['Template'];

        return (
            <BlazeTemplateComponent template={template.loginButtons} />
        );
    }
}