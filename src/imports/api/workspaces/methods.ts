import { Meteor } from 'meteor/meteor';
import * as uuid from 'node-uuid';

import { Workspace, Workspaces } from './workspaces';

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
                creatorId: Meteor.userId()
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    workspaceCreated(workspace: Workspace) {
        Workspaces.insert(workspace);
    }
});