import { Meteor } from 'meteor/meteor';
import * as Rabbitr from 'rabbitr';

Meteor.startup(() => {
    var settings = Meteor.settings['rabbitmq'];
    var rabbit = new Rabbitr({ url: settings['url'] });

    rabbit.subscribe('b2.domain.events', data => {
        console.log(data);
    });
});