import * as React from 'react';
import { Link, IInjectedProps } from 'react-router';

import WorkspaceCreatorComponent from './sidebar/workspaceCreator';
import WorkspacesComponent from './sidebar/workspaces';
import LogoutComponent from './logout';

export default class ApplicationComponent extends React.Component<IInjectedProps, {}> {

  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <LogoutComponent />
          <Link to="/workspaces/new">Add</Link>
          {this.props.children}
        </div>
      </div>
    );
  }
}