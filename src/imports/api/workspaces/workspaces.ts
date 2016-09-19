import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export interface Workspace {
    id: string;
    name: string;
    creator: string;
}

export const Workspaces = new Mongo.Collection<Workspace>('Workspaces');

if (Meteor.isServer) {
    Meteor.publish('workspaces', function () {
        return Workspaces.find();
    });
}