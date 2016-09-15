import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

import { AuthSettings } from './settings/auth';
import '../imports/api/workspaces';

function configureAuth(service: string) {
  const settings: AuthSettings = Meteor.settings[service];
  ServiceConfiguration.configurations.upsert({ service: service },
    {
      service: service,
      clientId: settings.clientId,
      secret: settings.secret,
      loginStyle: settings.loginStyle
    });
}


Meteor.startup(() => {
  configureAuth('github');
  configureAuth('google');
});
