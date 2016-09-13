import * as React from 'react';
import { Link, IInjectedProps } from 'react-router';

import WorkspacesList from './WorkspacesList';
import Logout from './Logout';

export default class Application extends React.Component<IInjectedProps, {}> {

  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <header>
            <Logout />
          </header>
          <div className="sidebar">
            <Link to="/workspaces/new">Add</Link>
            <WorkspacesList />
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}