import { Meteor } from 'meteor/meteor';
import * as Rabbitr from 'rabbitr';

import { Workspaces } from '../../api/workspaces/workspaces';

Meteor.startup(() => {
    var settings = Meteor.settings['rabbitmq'];
    var rabbit = new Rabbitr({ url: settings['url'] });

    rabbit.subscribe('b2.domain.events');
    rabbit.bindExchangeToQueue('b2.domain.events', 'b2.domain.events');


    rabbit.on('b2.domain.events', Meteor.bindEnvironment(message => {
        console.log('on', message);

        var payload = JSON.parse(message.data);

        console.log('poayload', payload);
        switch (payload.eventType) {
            case 'WorkspaceCreated':
                Meteor.call('workspaceCreated', payload.event);
                message.ack();
                break;
            default:
                break;
        }

        message.ack();
    }));
});