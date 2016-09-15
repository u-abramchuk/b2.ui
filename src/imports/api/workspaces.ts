import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http';
import * as uuid from 'node-uuid';

export interface Workspace {
    id: string;
    name: string;
    userId: string;
}

export const Workspaces = new Mongo.Collection<Workspace>('Workspaces');

if (Meteor.isServer) {
    Meteor.publish('workspaces', function () {
        return Workspaces.find();
    });
}

Meteor.methods({
    createWorkspace(name: string) {
        if (!Meteor.userId) {
            throw new Meteor.Error('not-authorized');
        }

        const id = uuid.v1();
        const url = Meteor.settings['b2.domain'].url;
        HTTP.call('POST', `${url}/workspaces/create`, {
            data: {
                id: id,
                name,
                userId: Meteor.userId()
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }, args => {
            console.log(args);
        });

        Workspaces.insert({
            id: id,
            name,
            userId: Meteor.userId()
        });
    }
});