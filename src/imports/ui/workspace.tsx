import * as React from 'react';

import { Workspace } from '../api/workspaces'

class WorkspaceProps {
  public workspace: Workspace;
}

// Task component - represents a single todo item
export default class WorkItemComponent extends React.Component<WorkspaceProps, {}> {
  constructor(props: WorkspaceProps) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.workspace.name}</li>
    );
  }
}