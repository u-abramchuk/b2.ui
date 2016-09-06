import * as React from 'react';

import WorkspaceCreatorComponent from './sidebar/workspaceCreator';
import WorkspacesComponent from './sidebar/workspaces';
import LogoutComponent from './logout';

export default class ApplicationComponent extends React.Component<{}, {}> {

  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <LogoutComponent />
          <WorkspaceCreatorComponent />
          <WorkspacesComponent />
        </div>
      </div>
    );
  }
}