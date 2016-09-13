import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

interface HeaderData {
    username: string;
}

@reactMixin.decorate(ReactMeteorData)
export default class HeaderComponent extends React.Component<{}, {}> {
    data: HeaderData;

    getMeteorData() {
        const data: HeaderData = {
            username: ''
        };
        const handle = Meteor.subscribe('users');

        if (handle.ready){
            // data.username = Meteor.users.findOne({id: Meteor.userId()}).username;
        }

        return data;
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="container-fluid">
                        <a className="brand" href="/">
                            <span>b2.ui</span>
                        </a>
                        <div className="nav-no-collapse header-nav">
                            <ul className="nav-pull-right">
                                <li className="dropdown">
                                    <a className="btn dropdown-toggle" href="#">
                                        <i className="halflings-icon white user"></i>
                                        {this.data.username}
                                        <span className="caret"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}