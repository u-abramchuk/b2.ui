import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
 
import Routing from '../imports/startup/client/Routes';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
 
Meteor.startup(() => {
  ReactDOM.render(<Routing />, document.getElementById('render-target'));
});