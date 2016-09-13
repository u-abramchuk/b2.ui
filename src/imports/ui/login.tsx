import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { IRouterContext, IInjectedProps, browserHistory } from 'react-router';

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