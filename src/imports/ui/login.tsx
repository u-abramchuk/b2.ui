import * as React from 'react';
import { IRouterContext, IInjectedProps, browserHistory } from 'react-router';
import MeteorComponent from './common/meteorComponent';

interface LoginData {
    isAuthenticated: boolean;
}

export default class LoginComponent extends MeteorComponent<IInjectedProps, {}, LoginData> {
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
        if (this.data.isAuthenticated) {
            this.context.router.push('/');
        }
    }

    loginWithGitHub(event) {
        event.preventDefault();
        Meteor.loginWithGithub();
    }

    loginWithGoogle(event) {
        event.preventDefault();
        Meteor.loginWithGoogle();
    }

    render() {
        var template = window['Template'];

        return (
            <div>
                <div>
                    <a onClick={this.loginWithGitHub.bind(this)} href="#">Login with GitHub</a>
                </div>
                <div>
                    <a onClick={this.loginWithGoogle.bind(this)} href="#">Login with Google</a>
                </div>
            </div>
        );
    }
}