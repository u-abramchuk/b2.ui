import * as React from 'react';
import { Link, IInjectedProps } from 'react-router';

import WorkspacesComponent from './workspaces';
import LogoutComponent from './logout';
import HeaderComponent from './header';

export default class ApplicationComponent extends React.Component<IInjectedProps, {}> {

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="container-fluid">
            <header>
              <LogoutComponent />
            </header>
            <div className="sidebar">
              <Link to="/workspaces/new">Add</Link>
              <WorkspacesComponent />
            </div>
            <div className="main-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}