import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

import { Workspace, Workspaces } from '../../api/workspaces'

interface WorkspacesData {
  workspaces: Array<Workspace>;
}

@reactMixin.decorate(ReactMeteorData)
export default class WorkspacesComponent extends React.Component<any, any> {

  data: WorkspacesData;

  getMeteorData() {
    const data: WorkspacesData = {
      workspaces: []
    };
    const handle = Meteor.subscribe('workspaces');

    if (handle.ready()) {
      data.workspaces = Workspaces.find({}, { sort: { id: 1 } }).fetch();
    }

    return data;
  }

  renderWorkspaces() {
    return this.data.workspaces.map((workspace: Workspace) => (
      <li key={workspace.id}>{workspace.name}</li>
    ));
  }

  render() {
    return this.data.workspaces.length > 0 ? (
      <ul>
        { this.renderWorkspaces() }
      </ul>
    ) : null;
  }
}