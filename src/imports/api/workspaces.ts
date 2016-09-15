import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

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

        Workspaces.insert({
            id: new Date().getTime().toString(),
            name,
            userId: Meteor.userId()
        });
    }
});