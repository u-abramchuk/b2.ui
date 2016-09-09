import * as React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

export default class LoginComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div className="login-page">
                <div className="container-fluid-full">
                    <div className="row-fluid">
                        <div className="row-fluid">
                            <div className="login-box">
                                <h2>Login to your account</h2>
                                <Accounts.ui.LoginForm className="form-horizontal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}