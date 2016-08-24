import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

import { Workspace, Workspaces } from '../api/workspaces';

import HeaderComponent from './header/header'
import WorkspaceComponent from './workspace';

interface AppData {
  workspaces: Array<Workspace>;
}


// App component - represents the whole app
@reactMixin.decorate(ReactMeteorData)
export default class App extends React.Component<any, {}> {
  
  data:AppData;

  constructor(props: any) {
    super(props);
  }

  getMeteorData() {
    let query = {};

    return {
      workspaces: Workspaces.find(query, {sort: {id: 1}}).fetch()
    }
  }

  renderWorkspaces() {
    return this.data.workspaces.map((workspace: Workspace) => (
      <WorkspaceComponent key={workspace.id} workspace={workspace} />
    ));
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />

        <ul>
          {this.renderWorkspaces() }
        </ul>
      </div>
    );
  }
}