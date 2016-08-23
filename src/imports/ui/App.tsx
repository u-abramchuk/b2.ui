import * as React from 'react';

import WorkItem from '../api/workItems'
import WorkItemComponent from './WorkItem';

// App component - represents the whole app
export default class App extends React.Component<any, any> {
  getWorkItems() {
    return [
      new WorkItem('1', 'WorkItem1'),
      new WorkItem('2', 'WorkItem2'),
      new WorkItem('3', 'WorkItem3')
    ];
  }

  renderWorkItems() {
    return this.getWorkItems().map((workItem) => (
      <WorkItemComponent key={workItem.id} workItem={workItem} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Work Items</h1>
        </header>

        <ul>
          {this.renderWorkItems() }
        </ul>
      </div>
    );
  }
}