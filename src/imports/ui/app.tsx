import * as React from 'react';

import HeaderComponent from './header/header'
import WorkspacesComponent from './sidebar/workspaces';

// App component - represents the whole app
export default class App extends React.Component<any, {}> {
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <WorkspacesComponent />
      </div>
    );
  }
}