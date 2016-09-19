import { ServiceConfiguration } from 'meteor/service-configuration';

enum LoginStyle {
    popup,
    redirect
}

export interface AuthSettings {
    clientId: string;
    secret: string;
    loginStyle: LoginStyle
}

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