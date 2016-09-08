import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { IRouterContext, IInjectedProps, browserHistory } from 'react-router';

import BlazeTemplateComponent from './blazeTemplate';

interface LoginData {
    isAuthenticated: boolean;
}

@reactMixin.decorate(ReactMeteorData)
export default class LoginComponent extends React.Component<IInjectedProps, {}> {
    context: IRouterContext;
    data: LoginData;

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }

    getMeteorData() {
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    }

    ensureAuthenticated() {
        if (this.data.isAuthenticated) {
            this.context.router.push('/');
        }
    }

    componentWillMount() {
        this.ensureAuthenticated();
    }

    componentDidUpdate() {
        this.ensureAuthenticated();
    }

    render() {
        var template = window['Template'];

        return (
            <div className="login-page">
                <div className="container-fluid-full">
                    <div className="row-fluid">
                        <div className="row-fluid">
                            <div className="login-box">
                                <h2>Login to your account</h2>
                                <BlazeTemplateComponent template={template.loginButtons} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}