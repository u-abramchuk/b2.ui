import * as React from 'react';

import Task from '../api/tasks'
import TaskComponent from './Task';

// App component - represents the whole app
export default class App extends React.Component<any, any> {
  getTasks() {
    return [
      new Task(1, 'Task1'),
      new Task(2, 'Task2'),
      new Task(3, 'Task3')
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <TaskComponent key={task.id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks() }
        </ul>
      </div>
    );
  }
}