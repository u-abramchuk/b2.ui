import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import App from '../imports/ui/app';
 
Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});