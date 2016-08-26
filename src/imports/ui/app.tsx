import * as React from 'react';

import HeaderComponent from './header/header';
import AccountsUIWrapper from './accountsUIWrapper';
import WorkspaceCreatorComponent from './sidebar/workspaceCreator';
import WorkspacesComponent from './sidebar/workspaces';

// App component - represents the whole app
export default class App extends React.Component<any, {}> {
  render() {
     var template = window['Template'];
    return (
      <div className="container">
        <HeaderComponent />
        <div className="container-fluid">
          <AccountsUIWrapper template={template.loginButtons} />
          <WorkspaceCreatorComponent />
          <WorkspacesComponent />
        </div>
      </div>
    );
  }
}