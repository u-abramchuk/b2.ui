import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import ApplicationComponent from '../imports/ui/app';
import RoutingComponent from '../imports/startup/routes';

import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
 
Meteor.startup(() => {
  ReactDOM.render(<RoutingComponent />, document.getElementById('render-target'));
});