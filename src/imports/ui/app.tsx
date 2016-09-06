import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

import WorkspaceCreatorComponent from './sidebar/workspaceCreator';
import WorkspacesComponent from './sidebar/workspaces';

@reactMixin.decorate(ReactMeteorData)
export default class ApplicationComponent extends React.Component<{}, {}> {

  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <WorkspaceCreatorComponent />
          <WorkspacesComponent />
        </div>
      </div>
    );
  }
}