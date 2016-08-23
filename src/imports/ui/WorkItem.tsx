import * as React from 'react';

import WorkItem from '../api/workItems'

class WorkItemProps {
  public workItem: WorkItem;
}

// Task component - represents a single todo item
export default class WorkItemComponent extends React.Component<WorkItemProps, {}> {
  constructor(props: WorkItemProps) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.workItem.text}</li>
    );
  }
}