import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import {browserHistory } from 'react-router';

import BlazeTemplateComponent from './blazeTemplate';

interface LoginData {
  isAuthenticated: boolean;
}

@reactMixin.decorate(ReactMeteorData)
export default class LoginComponent extends React.Component<{}, {}>{
    data: LoginData;

    getMeteorData() {
        return {
            isAuthenticated: Meteor.user() !== null
        };
    }

    componentWillMount() {
        if (this.data.isAuthenticated) {
            browserHistory.push('/');
        }
    }

    render() {
        var template = window['Template'];

        return (
            <BlazeTemplateComponent template={template.loginButtons} />
        );
    }
}