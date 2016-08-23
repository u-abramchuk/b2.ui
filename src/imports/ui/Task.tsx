import * as React from 'react';

import Task from '../api/tasks'

class TaskProps {
  public task: Task;
}

// Task component - represents a single todo item
export default class TaskComponent extends React.Component<TaskProps, {}> {
  constructor(props: TaskProps) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}