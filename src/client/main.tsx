import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import App from '../imports/ui/app';

import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
 
Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});