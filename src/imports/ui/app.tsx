import * as React from 'react';

import HeaderComponent from './header/header';
import WorkspaceCreatorComponent from './sidebar/workspaceCreator';
import WorkspacesComponent from './sidebar/workspaces';

// App component - represents the whole app
export default class App extends React.Component<any, {}> {
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <div className="container-fluid">
          <WorkspaceCreatorComponent />
          <WorkspacesComponent />
        </div>
      </div>
    );
  }
}