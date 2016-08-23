import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import App from '../imports/ui/App';
 
Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});