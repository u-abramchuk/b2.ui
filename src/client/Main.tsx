import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Router, Route, browserHistory } from 'react-router';

import routes from '../imports/startup/client/routes';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Meteor.startup(() => {
  ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('render-target'));
});