import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

import HeaderComponent from './header/header';
import WorkspaceCreatorComponent from './sidebar/workspaceCreator';
import WorkspacesComponent from './sidebar/workspaces';

interface AppData {
  currentUser: Meteor.User;
}

@reactMixin.decorate(ReactMeteorData)
export default class App extends React.Component<{}, {}> {

  data: AppData;

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />
        { this.data.currentUser ? (
          <div className="container-fluid">
            <WorkspaceCreatorComponent />
            <WorkspacesComponent />
          </div>
        ) : null}
      </div>
    );
  }
}