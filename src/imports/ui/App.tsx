import * as React from 'react';
import * as reactMixin from 'react-mixin';

import * as ReactMeteorData from 'meteor/react-meteor-data';

import HeaderComponent from './header/header'
import WorkItem from '../api/workItems'
import WorkItemComponent from './WorkItem';

// App component - represents the whole app
@reactMixin.decorate(ReactMeteorData)
export default class App extends React.Component<{}, {}> {
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
        <HeaderComponent />

        <ul>
          {this.renderWorkItems() }
        </ul>
      </div>
    );
  }
}